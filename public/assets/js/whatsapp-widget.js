
(function() {
    // Create the anchor element
    var waBtn = document.createElement('a');
    waBtn.href = "https://wa.me/919105597548";
    waBtn.target = "_blank";
    waBtn.setAttribute('aria-label', 'Chat on WhatsApp');
    waBtn.style.position = "fixed";
    waBtn.style.bottom = "20px";
    waBtn.style.right = "20px";
    waBtn.style.width = "60px";
    waBtn.style.height = "60px";
    waBtn.style.backgroundColor = "#25d366";
    waBtn.style.borderRadius = "50%";
    waBtn.style.boxShadow = "2px 2px 3px #999";
    waBtn.style.zIndex = "1000"; // Ensure it stays on top
    waBtn.style.display = "flex";
    waBtn.style.alignItems = "center";
    waBtn.style.justifyContent = "center";
    waBtn.style.textDecoration = "none";

    // Create the icon element (using FontAwesome class as per existing CSS)
    var icon = document.createElement('i');
    icon.className = "fab fa-whatsapp";
    icon.style.color = "#fff";
    icon.style.fontSize = "35px";
    
    // Append icon to button
    waBtn.appendChild(icon);

    // Append button to body
    document.body.appendChild(waBtn);
})();
