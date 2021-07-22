import 'bootstrap/dist/css/bootstrap.min.css';
import './src/layout/layout.css'

export const onClientEntry = async () => {
    if (typeof IntersectionObserver === "undefined") {
      await import("intersection-observer")
    }
  }