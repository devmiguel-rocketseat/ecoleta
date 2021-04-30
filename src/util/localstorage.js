const storage = {
  get() {
    if (typeof window !== 'undefined') {
      const formulario = localStorage.getItem("formulario.react")
      return JSON.parse(formulario) || []
    }
  },

  set(formulario) {
    if (typeof window !== 'undefined') {
      const formularioJson = JSON.stringify(formulario)
      localStorage.setItem("formulario.react", formularioJson)
    }
  },
}

export default storage
