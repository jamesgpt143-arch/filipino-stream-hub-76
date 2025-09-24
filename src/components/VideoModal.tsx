import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { X, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoUrl: string;
}

export const VideoModal = ({ isOpen, onClose, title, videoUrl }: VideoModalProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (isOpen && iframeRef.current) {
      // Enable audio by removing mute parameter
      const iframe = iframeRef.current;
      const currentSrc = iframe.src;
      
      // Remove mute parameter and ensure autoplay with sound
      const newSrc = currentSrc
        .replace(/[&?]mute=1/g, '')
        .replace(/[&?]muted=1/g, '') + 
        (currentSrc.includes('?') ? '&' : '?') + 'autoplay=1&mute=0';
      
      if (iframe.src !== newSrc) {
        iframe.src = newSrc;
      }
    }
  }, [isOpen, videoUrl]);

  const toggleMute = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      try {
        // Try to communicate with iframe if same origin
        iframe.contentWindow?.postMessage({ action: isMuted ? 'unmute' : 'mute' }, '*');
        setIsMuted(!isMuted);
      } catch (error) {
        console.log('Cannot control iframe audio directly');
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[80vh] p-0">
        <div className="w-full h-full relative">
          <iframe
            ref={iframeRef}
            src={videoUrl + (videoUrl.includes('?') ? '&' : '?') + 'autoplay=1&mute=0'}
            title={title}
            className="w-full h-full border-0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            sandbox="allow-scripts allow-same-origin allow-forms allow-presentation"
          />
          
          {/* Audio Control Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMute}
            className="absolute top-4 left-4 text-white bg-black/50 hover:bg-black/70 backdrop-blur-sm z-10"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>

          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 backdrop-blur-sm z-10"
            title="Close"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};