
onload = function() {
    // Elementos maiores na página (início)
    var sideBar = document.querySelector("#rightsidebar");
    var menuList = document.querySelector(".tabmenu.ui-tabs-nav.ui-helper-reset.ui-helper-clearfix.ui-widget-header.ui-corner-all")
    var textChat = document.querySelector("#textchat-input")
    var mapa = document.querySelector("#editor-wrapper")
    var zoom = document.querySelector("#zoomclick")
    var content = document.querySelector(".content")

    sideBar.style.cssText = `
    width: 100px;
    `

    menuList.style.cssText = `
    width: 100px;
    `

    textChat.style.cssText = `
    width: 100px;
    `

    content.style.cssText = `
    font-size: 5pt;
    `

    mapa.style.cssText = `
    width: 1250px;
    `

    zoom.style.cssText = `
    right: 120px;
    `

    // Elementos maiores na página (fim)

    // Elementos menores na página (início)


}