import { Phone, Mail, MapPin } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-800 dark:text-white">CONTACT US</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-green-600 dark:text-green-300" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">UAN: ‪+92-33733-0-1111‬ </span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-green-600 dark:text-green-300" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Email: info@hurricanian.com</span>
              </div>
              
              
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Or contact us using</h3>
            
            <div className="flex justify-center items-center space-x-6">
              {/* WhatsApp */}
              <div className="relative group">
                <a href="https://api.whatsapp.com/send?phone=+923373301111&text=Hello%20Hurricanian" aria-label="WhatsApp" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <div className="filled whatsapp-bg h-full w-full absolute bottom-0 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <svg viewBox="0 0 24 24" className="relative z-10 transition-colors duration-300 group-hover:text-white" fill="currentColor" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                </a>
                <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-emerald-700 text-white py-1 px-3 rounded opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:top-[-40px]">WhatsApp</div>
              </div>
              
              {/* Facebook */}
              <div className="relative group">
                <a href="https://www.facebook.com/" aria-label="Facebook" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <div className="filled facebook-bg h-full w-full absolute bottom-0 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <svg viewBox="0 0 24 24" className="relative z-10 transition-colors duration-300 group-hover:text-white" fill="currentColor" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"></path>
                  </svg>
                </a>
                <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-emerald-700 text-white py-1 px-3 rounded opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:top-[-40px]">Facebook</div>
              </div>
              
              {/* Instagram */}
              <div className="relative group">
                <a href="https://www.instagram.com/" aria-label="Instagram" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <div className="filled instagram-bg h-full w-full absolute bottom-0 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <svg viewBox="0 0 16 16" className="relative z-10 transition-colors duration-300 group-hover:text-white" fill="currentColor" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
                  </svg>
                </a>
                <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-emerald-700 text-white py-1 px-3 rounded opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:top-[-40px]">Instagram</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;