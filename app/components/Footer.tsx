import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { FaStackOverflow } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Omkar Mozar. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/omkar-mozar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/OmkarMozar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://x.com/GenAiEnthu29" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://stackoverflow.com/users/5250644/omkar-mozar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaStackOverflow size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

