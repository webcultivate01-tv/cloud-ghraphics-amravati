import React, { useEffect } from 'react'

const CustomCursor = () => {
  useEffect(() => {
    let lastTime = 0
    const throttleDelay = 30 // Create trail every 30ms for smooth effect

    const createTrail = (e) => {
      const currentTime = Date.now()
      
      if (currentTime - lastTime < throttleDelay) return
      lastTime = currentTime

      const trail = document.createElement('div')
      trail.className = 'cursor-trail'
      trail.style.left = e.clientX + 'px'
      trail.style.top = e.clientY + 'px'
      
      document.body.appendChild(trail)
      
      // Remove trail element after animation completes
      setTimeout(() => {
        trail.remove()
      }, 600)
    }

    window.addEventListener('mousemove', createTrail)

    return () => {
      window.removeEventListener('mousemove', createTrail)
    }
  }, [])

  return null
}

export default CustomCursor
