import React from 'react'
import { FaDiscord, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>e-Shop</h3>
          <p>
            Your one-Step for all you need. Shop with us and experience the best online shopping
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Shop</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Follow us</h4>
          <div>
            <a href=""><FaFacebook/></a>
            <a href=""><FaDiscord/></a>
            <a href=""><FaGithub/></a>
            <a href=""><FaLinkedin/></a>
           </div>
           <form>
            <input type="email" />
            <button>Subscribe</button>
           </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer