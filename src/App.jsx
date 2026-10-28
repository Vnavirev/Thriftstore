import React, { useMemo, useState } from 'react';
import { ArrowDownRight, ArrowRight, Heart, Menu, Search, ShoppingBag, SlidersHorizontal, Sparkles, X } from 'lucide-react';

const products = [
  { id: 1, name: 'The Sunday Knit', category: 'Tops', price: 680, old: 950, tag: 'STAFF PICK', color: 'Oatmeal', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=85' },
  { id: 2, name: 'Vintage Denim', category: 'Bottoms', price: 890, old: 1400, tag: 'ONE OF ONE', color: 'Indigo', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85' },
  { id: 3, name: 'Soft Structure Blazer', category: 'Outerwear', price: 1250, old: 2200, tag: 'RARE FIND', color: 'Chocolate', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85' },
  { id: 4, name: 'Everyday Carryall', category: 'Accessories', price: 540, old: 800, tag: 'JUST IN', color: 'Cognac', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85' },
  { id: 5, name: 'Weekend Stripes', category: 'Tops', price: 590, old: 850, tag: 'PRE-LOVED', color: 'Blue / Cream', image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=900&q=85' },
  { id: 6, name: 'The Easy Trench', category: 'Outerwear', price: 1490, old: 2600, tag: 'RARE FIND', color: 'Sand', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85' },
  { id: 7, name: 'Classic Canvas Tote', category: 'Accessories', price: 390, old: 600, tag: 'JUST IN', color: 'Natural', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85' },
  { id: 8, name: 'Straight Up Denim', category: 'Bottoms', price: 790, old: 1200, tag: 'PRE-LOVED', color: 'Washed blue', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85' }
];
const categories = ['All pieces', 'Tops', 'Bottoms', 'Outerwear', 'Accessories'];
const money = n => `₹${n.toLocaleString('en-IN')}`;

function App() {
  const [category, setCategory] = useState('All pieces');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState('');

  const filtered = useMemo(() => products.filter(p =>
    (category === 'All pieces' || p.category === category) &&
    `${p.name} ${p.category} ${p.color}`.toLowerCase().includes(search.toLowerCase())
  ), [category, search]);

  const addToCart = product => {
    setCart(current => [...current, product]);
    setNotice(`${product.name} added to your bag`);
    setTimeout(() => setNotice(''), 2200);
  };
  const toggleFavorite = id => setFavorites(current => current.includes(id) ? current.filter(x => x !== id) : [...current, id]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="site-shell">
      <div className="announcement"><Sparkles size={13} /> GOOD CLOTHES. BETTER STORIES. <span>Free shipping on orders over ₹1,499</span></div>
      <header className="header">
        <button className="icon-button mobile-menu" aria-label="Menu"><Menu size={21} /></button>
        <a className="wordmark" href="#top">second<span>story</span><i>®</i></a>
        <nav className="nav">
          <a href="#shop">Shop all</a><a href="#shop" onClick={() => setCategory('Tops')}>Clothing</a><a href="#our-way">Our way</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search" onClick={() => setSearchOpen(v => !v)}><Search size={20}/></button>
          <button className="bag-button" onClick={() => setCartOpen(true)}><ShoppingBag size={19}/><span>Bag</span><b>{cart.length}</b></button>
        </div>
      </header>

      {searchOpen && <div className="searchbar"><Search size={18}/><input autoFocus value={search} onChange={e => setSearch(e.target.value)} placeholder="Search your next favourite..." /><button onClick={() => {setSearch('');setSearchOpen(false)}} aria-label="Close search"><X size={18}/></button></div>}

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> PRE-LOVED, NEVER SECOND BEST</div>
            <h1>Good clothes.<br/><em>Second</em> chances.</h1>
            <p>Thoughtfully thrifted pieces with a past, picked for your future. Find the one-of-a-kind things your wardrobe has been missing.</p>
            <a className="primary-button" href="#shop">Find your next favourite <ArrowRight size={17}/></a>
            <div className="hero-note"><span className="tiny-star">✳</span><span>Each piece has a story.<br/><b>Make it part of yours.</b></span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image" role="img" aria-label="Neutral vintage clothing on a rack"/>
            <div className="round-stamp"><span>GOOD FINDS</span><b>✳</b><span>GOOD FEELINGS</span></div>
            <div className="hero-caption"><span>01 / 03</span><span>THE NEW-TO-YOU EDIT <ArrowDownRight size={15}/></span></div>
          </div>
          <div className="hero-side-label">CONSIDERED CLOTHING · CIRCULAR STYLE</div>
        </section>

        <section className="ticker" aria-label="Store values"><div>WEAR IT WELL <span>✳</span> LOVE IT LONGER <span>✳</span> PASS IT ON <span>✳</span> WEAR IT WELL <span>✳</span> LOVE IT LONGER <span>✳</span> PASS IT ON <span>✳</span></div></section>

        <section className="shop-section" id="shop">
          <div className="section-top">
            <div><div className="eyebrow"><span className="eyebrow-line"/> THE GOOD STUFF</div><h2>Fresh finds, <em>fresh starts.</em></h2><p className="section-description">Small batches. Big personality. Every piece is ready for its next chapter.</p></div>
            <a className="text-link" href="#shop">SHOP THE EDIT <ArrowRight size={16}/></a>
          </div>
          <div className="shop-toolbar">
            <div className="category-tabs">{categories.map(c => <button key={c} className={category === c ? 'tab active' : 'tab'} onClick={() => setCategory(c)}>{c}</button>)}</div>
            <div className="result-count"><SlidersHorizontal size={15}/>{filtered.length} pieces</div>
          </div>
          <div className="product-grid">
            {filtered.map((p, index) => <article className="product-card" key={p.id}>
              <div className="product-image-wrap">
                <img src={p.image} alt={p.name} loading={index > 3 ? 'lazy' : 'eager'} />
                <span className="product-tag">{p.tag}</span>
                <button className={`favorite ${favorites.includes(p.id) ? 'saved' : ''}`} onClick={() => toggleFavorite(p.id)} aria-label={favorites.includes(p.id) ? 'Remove from favourites' : 'Add to favourites'}><Heart size={18} fill={favorites.includes(p.id) ? 'currentColor' : 'none'}/></button>
                <button className="quick-add" onClick={() => addToCart(p)}>Add to bag <span>+</span></button>
              </div>
              <div className="product-meta"><div><h3>{p.name}</h3><p>{p.color} · {p.category}</p></div><div className="price"><b>{money(p.price)}</b><del>{money(p.old)}</del></div></div>
            </article>)}
          </div>
          {filtered.length === 0 && <div className="empty-state">No pieces found. Try another search or category.</div>}
          <div className="shop-bottom"><span>ONE-OF-A-KIND FINDS, ALWAYS.</span><span>Showing {filtered.length} of {products.length} pieces</span></div>
        </section>

        <section className="manifesto" id="our-way">
          <div className="manifesto-image"></div>
          <div className="manifesto-copy"><div className="eyebrow"><span className="eyebrow-line"/> A LITTLE MORE THOUGHTFUL</div><h2>Style should feel good.<br/><em>Doing good, too.</em></h2><p>We believe the best wardrobe isn't the biggest one. It's the one full of pieces you love, wear on repeat, and pass on when you're ready.</p><div className="values"><div><b>01</b><span>Handpicked<br/>with care</span></div><div><b>02</b><span>Less waste,<br/>more wear</span></div><div><b>03</b><span>More you,<br/>less new</span></div></div><a href="#shop" className="text-link">SHOP CONSCIOUSLY <ArrowRight size={16}/></a></div>
        </section>

        <section className="newsletter"><div className="newsletter-star">✳</div><div><div className="eyebrow">THE GOOD NEWSLETTER</div><h2>A good find in your inbox.</h2><p>First dibs on fresh drops, styling notes, and little reasons to shop secondhand.</p></div><Newsletter /></section>
      </main>

      <footer className="footer"><a className="wordmark footer-logo" href="#top">second<span>story</span><i>®</i></a><span>Good clothes deserve another story.</span><div><a href="#shop">Shop</a><a href="#our-way">Our way</a><a href="mailto:hello@secondstory.example">Say hello</a></div><small>© 2026 SECOND STORY · MADE FOR ANOTHER ROUND</small></footer>

      {notice && <div className="toast"><span>✓</span>{notice}</div>}
      {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={e => e.stopPropagation()}><div className="drawer-head"><div><span className="eyebrow">YOUR FINDS</span><h2>Your bag <span>({cart.length})</span></h2></div><button className="icon-button" onClick={() => setCartOpen(false)} aria-label="Close bag"><X/></button></div>
        {cart.length === 0 ? <div className="cart-empty"><ShoppingBag size={34}/><h3>Your next favourite is out there.</h3><p>Your bag is waiting for something good.</p><button className="primary-button" onClick={() => setCartOpen(false)}>Keep browsing <ArrowRight size={16}/></button></div> : <><div className="cart-items">{cart.map((item, i) => <div className="cart-item" key={`${item.id}-${i}`}><img src={item.image} alt={item.name}/><div><h3>{item.name}</h3><p>{item.color}</p><b>{money(item.price)}</b></div><button aria-label="Remove item" onClick={() => setCart(current => current.filter((_, idx) => idx !== i))}><X size={16}/></button></div>)}</div><div className="cart-total"><div><span>Subtotal</span><b>{money(total)}</b></div><p>Shipping calculated at checkout.</p><button className="primary-button checkout" onClick={() => setNotice('Checkout demo — no payment has been taken.')}>Continue to checkout <ArrowRight size={16}/></button></div></>}
      </aside></div>}
    </div>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  return <form className="newsletter-form" onSubmit={e => {e.preventDefault(); if (email.trim()) setSubmitted(true);}}>
    {submitted ? <div className="success-message">You're on the list. Keep an eye out ✳</div> : <><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" required placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)}/><button type="submit" aria-label="Subscribe"><ArrowRight size={19}/></button></>}
  </form>;
}

createRoot;
export default App;