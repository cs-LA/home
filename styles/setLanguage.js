      function setLanguage() {
        shortLang = sessionStorage.getItem("shortLang")
        document.getElementById("debug").innerHTML = " | "
        
        if (shortLang == null) {
          lang = window.navigator.languages ? window.navigator.languages[0] : null
          lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage

          shortLang = lang
          if (shortLang.indexOf('-') !== -1) {
            shortLang = shortLang.split('-')[0]
          }
          if (shortLang.indexOf('_') !== -1) {
            shortLang = shortLang.split('_')[0]
          }
          
          sessionStorage.setItem("shortLang", shortLang)
        }
        
        setEnglish()
        if (shortLang == 'de') {
          setGerman()
        }
        
        headerHeight = document.getElementById("header").clientHeight
        footerHeight = document.getElementById("footer").clientHeight
        //document.getElementById("scroll").style.top = "" + headerHeight + "px"
        //document.getElementById("scroll").style.bottom = "" + footerHeight + "px"
      }
      
      function setEnglish() {
        document.getElementById("german").innerHTML = "deutsch"
	      elements = document.getElementsByClassName("de")
        for (i=0; i<elements.length; i++) {
          elements[i].style.display = "none"
        }
        
        document.getElementById("english").innerHTML = "<b>english</b>"
	      elements = document.getElementsByClassName("en")
        for (i=0; i<elements.length; i++) {
          elements[i].style.display = "block"
        }
        
        sessionStorage.setItem("shortLang", "en")
      }
      function setGerman() {
        document.getElementById("german").innerHTML = "<b>deutsch</b>"
	      elements = document.getElementsByClassName("de")
        for (i=0; i<elements.length; i++) {
          elements[i].style.display = "block"
        }
        
        document.getElementById("english").innerHTML = "english"
	      elements = document.getElementsByClassName("en")
        for (i=0; i<elements.length; i++) {
          elements[i].style.display = "none"
        }
        
        sessionStorage.setItem("shortLang", "de")
      }
