const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Hrushikesh Kontham. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
