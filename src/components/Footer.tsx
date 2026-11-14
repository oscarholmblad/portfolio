const Footer = () => {
  return (
    <footer className="border-t border-birch/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-lichen sm:flex-row sm:justify-between sm:px-6">
        <p>&copy; {new Date().getFullYear()} Oscar Holmblad</p>
        <p>Byggd med React, TypeScript och Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
