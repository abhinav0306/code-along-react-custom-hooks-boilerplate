import React from 'react'

function useStorage() {
  let setStorage=(val)=>{
    localStorage.setItem("data",val)
    sessionStorage.setItem("data",val)
  }
  return {setStorage}
}

export default useStorage