      
function Footer() {
  return (  
      <footer className="border-t border-white/[0.06] mt-20 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-amber-500 flex items-center justify-center">
              <span className="text-ink-950 text-xs font-bold">S</span>
            </div>
            <span className="font-display text-sm text-ink-500">ShopNest</span>
          </div>
          <p className="text-xs text-ink-600">© {new Date().getFullYear()} ShopNest. All rights reserved.</p>
        </div>
      </footer>
  );
}

export default Footer;