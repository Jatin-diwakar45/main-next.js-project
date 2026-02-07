
const footerContent = `
<footer class="footer professional-footer" style="padding-top: 90px; padding-bottom: 45px; background-color: #060a1f; color: #ffffff; position: relative; z-index: 1; font-family: 'Outfit', sans-serif;">
    <div class="background-overlay" style="position: absolute; top:0; left:0; width:100%; height:100%; background: url('assets/img/bg/footer-bg.png') no-repeat center center/cover; opacity: 0.05; z-index: -1;"></div>
    
    <div class="container">
        <div class="row justify-content-between">
            <!-- Col 1: Brand & Contact -->
            <div class="col-lg-4 col-md-6 mb-5">
                <div class="footer-brand mb-4">
                    <h2 class="title" style="color: #ffffff; font-size: 28px; font-weight: 700; margin-bottom: 20px;">Kloudon Technologies</h2>
                </div>
                <p class="mb-4" style="color: #b2b3b7; font-size: 16px; line-height: 1.6; max-width: 320px;">
                    We help businesses grow and scale using smart AI solutions. Drive scalable growth and efficiency.
                </p>
                <div class="footer-contact-info">
                    <div class="d-flex align-items-start mb-3">
                        <img src="assets/img/icon/location-icon.svg" alt="loc" style="width: 20px; opacity: 0.8; margin-top: 4px;" class="me-3">
                        <span style="color: #b2b3b7;">Plot No. 4, Mahaveer Town, Maruti City Road, Kahrai Mod Agra, UP</span>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <img src="assets/img/icon/email-icon.svg" alt="email" style="width: 20px; opacity: 0.8;" class="me-3">
                        <a href="mailto:info@kloudon.com" style="color: #b2b3b7; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#b2b3b7'">info@kloudon.com</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <img src="assets/img/icon/call-icon.svg" alt="phone" style="width: 20px; opacity: 0.8;" class="me-3">
                        <a href="callto:+919105658313" style="color: #b2b3b7; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#b2b3b7'">+91 9105658313</a>
                    </div>
                </div>
            </div>

            <!-- Col 2: Company Links -->
            <div class="col-lg-2 col-md-6 mb-5">
                <h5 class="mb-4" style="color: #ffffff; font-weight: 600; font-size: 18px; text-transform: uppercase; letter-spacing: 1px;">Company</h5>
                <ul class="list-unstyled footer-links p-0 m-0">
                    <li class="mb-2"><a href="about.html">About Us</a></li>
                    <li class="mb-2"><a href="team.html">Our Team</a></li>
                    <li class="mb-2"><a href="career.html">Careers</a></li>
                    <li class="mb-2"><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>

            <!-- Col 3: Services Links -->
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="mb-4" style="color: #ffffff; font-weight: 600; font-size: 18px; text-transform: uppercase; letter-spacing: 1px;">Services</h5>
                <ul class="list-unstyled footer-links p-0 m-0">
                    <li class="mb-2"><a href="service.html">All Services</a></li>
                    <li class="mb-2"><a href="blog.html">Latest News</a></li>
                </ul>
            </div>

            <!-- Col 4: Social -->
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="mb-4" style="color: #ffffff; font-weight: 600; font-size: 18px; text-transform: uppercase; letter-spacing: 1px;">Follow Us</h5>
                <div class="social-links d-flex gap-3">
                    <a href="https://www.facebook.com/kloudontechnologies" class="social-btn"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#!" class="social-btn"><i class="fa-brands fa-twitter"></i></a> <!-- Assuming generic links if specific ones missing -->
                    <a href="#!" class="social-btn"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="#!" class="social-btn"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </div>

        <div class="footer-bottom pt-4 mt-2" style="border-top: 1px solid rgba(255,255,255,0.1);">
            <div class="row align-items-center">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    <p class="mb-0" style="color: #808087; font-size: 14px;">Copyright © <span id="copyright_year">2026</span> Kloudon Technologies. All rights reserved.</p>
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item mx-2"><a href="terms.html" style="color: #808087; font-size: 14px; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#808087'">Terms & Conditions</a></li>
                        <li class="list-inline-item mx-2"><a href="privacy.html" style="color: #808087; font-size: 14px; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#808087'">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer-links li a {
        color: #b2b3b7;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-block;
    }
    .footer-links li a:hover {
        color: #ffffff;
        transform: translateX(5px);
        padding-left: 5px;
    }
    .social-btn {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255,0.1);
        color: #fff;
        border-radius: 50%;
        text-decoration: none;
        transition: 0.3s;
    }
    .social-btn:hover {
        background: var(--color-primary, #007bff);
        color: #fff;
        transform: translateY(-3px);
    }
    .footer-contact-info img {
        filter: invert(1); /* Ensure icons are white if they happen to be dark SVG */
    }
</style>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const yearSpan = document.getElementById('copyright_year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    });
</script>
`;
