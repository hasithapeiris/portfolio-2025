const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border">
      <div className="wrapper py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Hasitha Peiris. All rights
            reserved.
          </p>
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
