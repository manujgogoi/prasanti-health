import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h- bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-400 py-10 px-3">
      <div>
        <div className="text-center">
          <Image
            src="/images/Logo.png"
            width={80}
            height={80}
            alt="Prasanti Logo"
          />
          <h4 className="text-2xl">PIISM</h4>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-4">
        <div>
          <div>
            <Image src="/images/Logo.png" width={80} height={80} />
          </div>
          <h3>PIISM</h3>
          <p>The alternative treatment centre</p>
        </div>
        <div className="pr-5">
          <h4 className="text-white">Menu</h4>
          <div className="w-1/2 border-t-2 mb-2 border-gray-400"></div>
          <div>
            <div>
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
            <div>
              <Link href="/about">
                <a>About us</a>
              </Link>
            </div>
            <div>
              <Link href="/contact">
                <a>Contact us</a>
              </Link>
            </div>
            <div>
              <Link href="#">
                <a>Gallery</a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-white">Services</h4>
          <div className="w-1/2 border-t-2 mb-2 border-gray-400"></div>
          <div>
            <div>Yoga</div>
            <div>Massage</div>
            <div>Steam Bath</div>
            <div>Herbal Bath</div>
          </div>
        </div>
        <div>
          <h4 className="text-white">Social Media</h4>
          <div className="w-1/2 border-t-2 mb-2 border-gray-400"></div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 cursor-pointer hover:text-white">
              <svg
                className="w-6 h-6 text-blue-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <p>Facebook</p>
            </div>
            <div className="flex gap-3 cursor-pointer hover:text-white">
              <svg
                className="w-6 h-6 text-green-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
              <p>Whatsapp</p>
            </div>
            <div className="flex gap-3 cursor-pointer hover:text-white">
              <svg
                className="w-6 h-6 text-blue-300 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="text-center pt-10">
        Copyright &#169; 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
