// footer.js - Script to inject a shared footer across all pages
document.addEventListener('DOMContentLoaded', function() {
    const footerContent = `
        <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        2025 Chuanbo Hua | Korea Advanced Institute of Science & Technology (KAIST) | Last Update: 05/23/2025
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Find the footer element in the page and inject our content
    const footerElement = document.querySelector('footer.text-center');
    if (footerElement) {
        footerElement.innerHTML = footerContent;
    }
}); 