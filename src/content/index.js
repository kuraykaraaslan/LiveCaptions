import React, { Component, useState, useEffect } from 'react'

alert("content script loaded")

function Content() {
  
    var element = document.getElementsByClassName("avatar avatar-user")

    //if element exists alert element found
    if (element.length > 0) {
        alert("element found")
    

    
    } else {
        alert("element not found")
    }

    return (
        <div>
            <h1>Content</h1>
        </div>
    )


}

export {}
