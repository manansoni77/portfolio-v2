export const Navbar = () => {
  return (
    <div class="flex-row navbar">
      <a href="#title" class="nav-item">
        Home
      </a>
      <a href="#about" class="nav-item">
        About
      </a>
      <a href="#skills" class="nav-item">
        Skills
      </a>
      <a href="#projects" class="nav-item">
        Projects
      </a>
      <a
        href="https://pub-ea879cfb62fc4c57b3f9763bd48d3d8f.r2.dev/manansoni_resume.pdf"
        target="_blank"
        download="manansoni_resume.pdf"
        class="nav-item"
        rel="noreferrer"
      >
        Resume
      </a>
    </div>
  );
};
