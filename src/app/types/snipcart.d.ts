interface SnipcartAPI {
    refresh: () => void
  }
  
  declare global {
    interface Window {
      Snipcart?: SnipcartAPI
    }
  }
  
  export {}
  
  