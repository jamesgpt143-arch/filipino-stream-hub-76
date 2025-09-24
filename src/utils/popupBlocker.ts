// Popup and ad blocker utility
export const initializePopupBlocker = () => {
  // Block popup windows
  const originalOpen = window.open;
  window.open = function(...args) {
    console.log('Blocked popup attempt:', args);
    return null;
  };

  // Block common ad domains
  const adDomains = [
    'doubleclick.net',
    'googleadservices.com',
    'googlesyndication.com',
    'adsystem.com',
    'adskeeper.co.uk',
    'popads.net',
    'popcash.net',
    'propellerads.com',
    'adnxs.com',
    'adsystem.com',
    'amazon-adsystem.com',
    'media.net',
    'outbrain.com',
    'taboola.com',
    'revcontent.com',
    'mgid.com'
  ];

  // Block requests to ad domains
  const originalFetch = window.fetch;
  window.fetch = async function(input: RequestInfo | URL, init?: RequestInit) {
    const url = typeof input === 'string' ? input : input.toString();
    
    for (const domain of adDomains) {
      if (url.includes(domain)) {
        console.log('Blocked ad request:', url);
        return new Response('', { status: 204 });
      }
    }
    
    return originalFetch.call(this, input, init);
  };

  // Block event-based popups
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A') {
      const href = (target as HTMLAnchorElement).href;
      for (const domain of adDomains) {
        if (href && href.includes(domain)) {
          e.preventDefault();
          e.stopPropagation();
          console.log('Blocked ad link:', href);
          return false;
        }
      }
    }
  }, true);

  // Block alert/confirm dialogs that are often used for ads
  const originalAlert = window.alert;
  const originalConfirm = window.confirm;
  
  window.alert = function(message) {
    if (typeof message === 'string' && (
      message.includes('ad') || 
      message.includes('click') || 
      message.includes('winner') ||
      message.includes('congratulations')
    )) {
      console.log('Blocked suspicious alert:', message);
      return;
    }
    return originalAlert.call(this, message);
  };

  window.confirm = function(message) {
    if (typeof message === 'string' && (
      message.includes('ad') || 
      message.includes('click') || 
      message.includes('winner') ||
      message.includes('congratulations')
    )) {
      console.log('Blocked suspicious confirm:', message);
      return false;
    }
    return originalConfirm.call(this, message);
  };

  console.log('Popup and ad blocker initialized');
};

// Additional iframe sandbox features
export const getSafeIframeSandbox = () => {
  return "allow-scripts allow-same-origin allow-forms allow-popups-to-escape-sandbox";
};

// Content Security Policy for blocking ads
export const addCSPMeta = () => {
  const meta = document.createElement('meta');
  meta.httpEquiv = 'Content-Security-Policy';
  meta.content = "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; connect-src 'self' https:; img-src 'self' data: https:; media-src 'self' https:; frame-src 'self' https:;";
  document.head.appendChild(meta);
};