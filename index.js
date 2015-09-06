if (typeof window === 'object' && window != null && window === window.window) require('./browser')
else require('./node')
