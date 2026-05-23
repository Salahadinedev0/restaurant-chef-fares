/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  ChevronDown, 
  Star, 
  Clock, 
  MapPin, 
  ArrowLeft, 
  ArrowRight,
  Instagram, 
  Facebook, 
  MessageCircle,
  QrCode,
  ArrowUpRight,
  Globe,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Calendar,
  Twitter,
} from 'lucide-react';
import { Language, TRANSLATIONS } from './translations';
import { MenuItem, CartItem, GET_CATEGORIES, GET_MENU_ITEMS, GET_BLOG_POSTS } from './data';

// --- Components ---

const Navbar = ({ lang, setLang, t, setView, navigateToMenu }: { 
  lang: Language, 
  setLang: (l: Language) => void, 
  t: any, 
  setView: (v: 'home' | 'menu' | 'blog' | 'blog-detail' | 'menu-item-detail' | 'family-menu' | 'contact') => void,
  navigateToMenu: (category: string) => void
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, onClick: () => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { name: t.nav.offers, href: '#offers', isAnchor: true },
    { name: t.nav.menu, onClick: () => navigateToMenu('all') },
    { name: t.nav.blog, onClick: () => { setView('blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { name: t.nav.contact, onClick: () => { setView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${isScrolled ? 'glass-card py-2 md:py-3 shadow-2xl border-b border-brand-gold/20' : 'bg-transparent py-4 md:py-6'}`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center ${lang === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Logo */}
        <button onClick={() => setView('home')} className="flex items-center gap-2 group">
          <img 
            src="https://imglink.cc/cdn/UXR3BKH9gj.png" 
            alt={t.brand} 
            className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </button>

        {/* Desktop Menu */}
        <div className={`hidden lg:flex items-center gap-6 xl:gap-10 ${lang === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
          {navLinks.map((link) => (
            link.isAnchor ? (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-brand-text/70 hover:text-brand-gold transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </a>
            ) : (
              <button 
                key={link.name} 
                onClick={link.onClick}
                className="text-brand-text/70 hover:text-brand-gold transition-colors text-sm font-medium tracking-wide uppercase cursor-pointer"
              >
                {link.name}
              </button>
            )
          ))}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'ar' ? 'fr' : 'ar')}
              className="flex items-center gap-2 text-brand-gold font-bold hover:bg-white/5 px-3 py-1.5 rounded-lg transition-all border border-brand-gold/15 group"
            >
              <Globe size={16} className="group-hover:rotate-12 transition-transform" />
              <span className="text-[10px] tracking-widest">{lang === 'ar' ? 'FRANÇAIS' : 'عربي'}</span>
            </button>
            <a href="#contact" className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-2 rounded-lg font-bold text-sm transition-luxury gold-bloom flex items-center gap-2 hover:scale-105 active:scale-95 shadow-lg">
              {t.nav.contact}
            </a>
          </div>
        </div>

        {/* Mobile Toggle & Lang Switcher */}
        <div className="flex items-center gap-3 lg:hidden">
          <button 
            onClick={() => setLang(lang === 'ar' ? 'fr' : 'ar')}
            className="flex items-center gap-1.5 text-brand-gold font-bold p-1.5 xs:p-2 bg-white/5 rounded-lg border border-white/10"
          >
            <Globe size={18} />
            <span className="text-[10px]">{lang === 'ar' ? 'FR' : 'AR'}</span>
          </button>
          <button className="text-brand-gold hover:bg-white/5 p-1.5 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            className={`fixed top-0 bottom-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-64 xs:w-72 bg-brand-bg/95 backdrop-blur-xl border-x border-brand-gold/10 z-50 p-6 flex flex-col gap-6 lg:hidden shadow-3xl`}
          >
            <div className={`flex justify-between items-center mb-4 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
              <button onClick={() => { setView('home'); setIsMobileMenuOpen(false); }}>
                <img 
                  src="https://imglink.cc/cdn/UXR3BKH9gj.png" 
                  alt={t.brand} 
                  className="h-10 w-auto object-contain" 
                />
              </button>
              <button className="text-brand-gold p-1" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className={`text-brand-text/80 hover:text-brand-gold font-medium py-3 px-4 rounded-xl hover:bg-brand-gold/5 transition-all ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <button 
                    key={link.name} 
                    onClick={() => { link.onClick?.(); setIsMobileMenuOpen(false); }}
                    className={`text-brand-text/80 hover:text-brand-gold font-medium py-3 px-4 rounded-xl hover:bg-brand-gold/5 transition-all ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                  >
                    {link.name}
                  </button>
                )
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-brand-gold/10 space-y-4">
              <div className={`flex items-center gap-3 text-brand-text-muted text-xs ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                <Phone size={14} className="text-brand-gold" />
                <span>+235 62 66 61 61</span>
              </div>
              <a href="#contact" className="block w-full bg-brand-red text-white py-4 rounded-xl font-bold shadow-xl active:scale-95 transition-transform text-center" onClick={() => setIsMobileMenuOpen(false)}>
                {t.nav.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, className = "", lang }: { title: string, subtitle?: string, className?: string, lang: Language }) => (
  <div className={`mb-10 md:mb-16 ${className}`}>
    <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-black text-brand-gold mb-3 md:mb-4">{title}</h2>
    <div className={`w-12 md:w-20 h-1 md:h-1.5 bg-brand-red mb-4 md:mb-6 ${className.includes('text-right') ? 'ml-auto' : className.includes('text-left') ? 'mr-auto' : 'mx-auto'}`} />
    {subtitle && <p className="text-brand-text-muted text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);

const MenuView: React.FC<{ 
  lang: Language, 
  t: any, 
  addToCart: (item: MenuItem) => void, 
  menuItems: Record<string, MenuItem[]>, 
  formatPrice: (p: number) => string,
  onBack: () => void,
  onSelectItem: (item: MenuItem) => void,
  initialCategory?: string
}> = ({ lang, t, addToCart, menuItems, formatPrice, onBack, onSelectItem, initialCategory = 'all' }) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);
  
  const categoryKeys = Object.keys(menuItems);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-brand-bg pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className={`mb-8 flex items-center gap-2 text-brand-gold font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}
        >
          {lang === 'ar' ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          {lang === 'ar' ? 'العودة للرئيسية' : 'Retour à l\'accueil'}
        </button>

        <SectionHeader lang={lang} title={t.detailedMenu.title} subtitle={t.detailedMenu.subtitle} className={lang === 'ar' ? 'text-right' : 'text-left'} />

        {/* Category Tabs */}
        <div className={`flex flex-wrap gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all ${activeCategory === 'all' ? 'red-gradient text-white shadow-lg' : 'bg-white/5 text-brand-text-muted hover:bg-white/10'}`}
          >
            {lang === 'ar' ? 'الكل' : 'Tout'}
          </button>
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all ${activeCategory === key ? 'red-gradient text-white shadow-lg' : 'bg-white/5 text-brand-text-muted hover:bg-white/10'}`}
            >
              {t.detailedMenu.categories[key as keyof typeof t.detailedMenu.categories] || key}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryKeys
            .filter(key => activeCategory === 'all' || activeCategory === key)
            .map(key => (
              <React.Fragment key={key}>
                {menuItems[key].map((item, idx) => (
                  <motion.div
                    key={`${key}-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => onSelectItem(item)}
                    className={`glass-card rounded-[2rem] overflow-hidden border border-brand-gold/10 flex flex-col group shadow-xl cursor-pointer ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img src={item.image} className="w-full h-full object-cover transition-luxury group-hover:scale-110" alt={item.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent opacity-60" />
                      <div className={`absolute top-4 ${lang === 'ar' ? 'left-4' : 'right-4'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                         <div className="bg-brand-gold text-brand-bg p-2 rounded-full shadow-2xl">
                           <Star size={16} fill="currentColor" />
                         </div>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h4 className="font-black text-brand-text text-lg mb-2 group-hover:text-brand-gold transition-colors">{item.name}</h4>
                      <p className="text-brand-text-muted text-xs mb-4 line-clamp-2 opacity-70 leading-relaxed flex-1">{item.desc}</p>
                      <div className={`flex items-center justify-between mt-auto ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className="flex flex-col">
                          <span className="text-brand-gold font-black text-xl tracking-tighter">{formatPrice(item.rawPrice || 0)}</span>
                          <span className="text-[10px] font-bold opacity-30 uppercase tracking-widest leading-none">{t.detailedMenu.currency}</span>
                        </div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                          className="red-gradient text-white p-2.5 rounded-xl shadow-lg hover:brightness-110 active:scale-90 transition-luxury flex items-center justify-center"
                        >
                          <Plus size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </React.Fragment>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

const BlogView: React.FC<{ 
  lang: Language, 
  t: any, 
  blogPosts: any[],
  onBack: () => void,
  onSelectPost: (post: any) => void
}> = ({ lang, t, blogPosts, onBack, onSelectPost }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-brand-bg pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className={`mb-8 flex items-center gap-2 text-brand-gold font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}
        >
          {lang === 'ar' ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          {lang === 'ar' ? 'العودة للرئيسية' : 'Retour à l\'accueil'}
        </button>

        <SectionHeader lang={lang} title={t.blog.title} subtitle={t.blog.subtitle} className={lang === 'ar' ? 'text-right' : 'text-left'} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onSelectPost(post)}
              className={`glass-card rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-brand-gold/20 transition-luxury group cursor-pointer ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            >
              <div className="h-64 overflow-hidden relative">
                <img src={post.image} className="w-full h-full object-cover transition-luxury group-hover:scale-110" alt={post.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60" />
                <div className={`absolute top-6 ${lang === 'ar' ? 'left-6' : 'right-6'} bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-xl`}>
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className={`flex items-center gap-2 text-brand-text-muted text-[10px] uppercase font-bold tracking-widest mb-4 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <Calendar size={14} className="text-brand-gold" />
                  {post.date}
                </div>
                <h3 className="text-2xl font-black text-brand-text mb-6 leading-tight group-hover:text-brand-gold transition-colors">{post.title}</h3>
                <button className={`flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-[10px] group/btn ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {lang === 'ar' ? 'اقرأ المزيد' : 'Lire la suite'}
                  <div className={`w-8 h-[1px] bg-brand-gold/30 group-hover/btn:w-12 transition-all`}></div>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const MenuItemDetailView: React.FC<{
  lang: Language,
  t: any,
  item: MenuItem | null,
  formatPrice: (p: number) => string,
  onBack: () => void,
  addToCart: (item: MenuItem) => void
}> = ({ lang, t, item, formatPrice, onBack, addToCart }) => {
  if (!item) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-brand-bg pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className={`mb-8 flex items-center gap-2 text-brand-gold font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}
        >
          {lang === 'ar' ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          {t.dishDetail.backMenu}
        </button>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-[3rem] overflow-hidden shadow-3xl aspect-square border border-brand-gold/10"
          >
            <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
          </motion.div>

          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <h1 className="text-4xl md:text-6xl font-black text-brand-text mb-6 tracking-tighter leading-tight">
              {item.name}
            </h1>
            
            <div className={`flex items-center gap-4 mb-8 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="flex flex-col">
                <span className="text-brand-gold font-black text-4xl tracking-tighter">{formatPrice(item.rawPrice || 0)}</span>
                <span className="text-[10px] font-bold opacity-30 uppercase tracking-widest">{t.detailedMenu.currency}</span>
              </div>
              <div className="w-px h-12 bg-white/10 mx-2" />
              <button 
                onClick={() => addToCart(item)}
                className="red-gradient text-white px-8 py-3 rounded-xl font-black shadow-2xl hover:brightness-110 active:scale-95 transition-luxury uppercase tracking-widest text-xs"
              >
                {t.dishDetail.addToOrder}
              </button>
            </div>

            <p className="text-brand-text-muted text-lg sm:text-xl leading-relaxed opacity-80 mb-8">
              {item.longDesc || item.desc}
            </p>

            {item.ingredients && (
              <div className="mb-10">
                <h3 className="text-brand-gold font-black uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
                  <div className="w-8 h-px bg-brand-gold/30" /> {t.dishDetail.ingredients}
                </h3>
                <div className={`flex flex-wrap gap-3 ${lang === 'ar' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                  {item.ingredients.map((ing, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-brand-text/70">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {item.nutritionalInfo && (
              <div>
                <h3 className="text-brand-gold font-black uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
                  <div className="w-8 h-px bg-brand-gold/30" /> {t.dishDetail.nutrition}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: t.dishDetail.calories, value: item.nutritionalInfo.calories },
                    { label: t.dishDetail.protein, value: item.nutritionalInfo.protein },
                    { label: t.dishDetail.carbs, value: item.nutritionalInfo.carbs },
                    { label: t.dishDetail.fat, value: item.nutritionalInfo.fat },
                  ].map((info, i) => (
                    info.value && (
                      <div key={i} className="glass-card p-4 rounded-2xl border border-white/5 text-center">
                        <span className="text-[10px] uppercase font-bold text-brand-text-muted block mb-1">{info.label}</span>
                        <span className="text-brand-gold font-black">{info.value}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ContactView: React.FC<{ 
  lang: Language, 
  t: any,
  newsletterEmail: string,
  setNewsletterEmail: (e: string) => void,
  newsletterStatus: 'idle' | 'loading' | 'success' | 'error',
  handleNewsletterSubmit: (e: any) => void | Promise<void>
}> = ({ lang, t, newsletterEmail, setNewsletterEmail, newsletterStatus, handleNewsletterSubmit }) => {
  const socialLinks = [
    { icon: <Instagram size={24} />, name: 'Instagram', url: 'https://instagram.com/bayt_al_mandi' },
    { icon: <Facebook size={24} />, name: 'Facebook', url: 'https://facebook.com/baytalmandi' },
    { icon: <Twitter size={24} />, name: 'Twitter', url: 'https://twitter.com/baytalmandi' },
    { icon: <MessageCircle size={24} />, name: 'WhatsApp', url: 'https://wa.me/23562666161' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-brand-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            {t.contact.title}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-brand-text mb-6 tracking-tight"
          >
            {t.contact.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-text-muted max-w-2xl mx-auto text-lg leading-relaxed font-medium"
          >
            {t.contact.desc}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-black text-brand-text mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                {t.contact.contactTitle}
              </h2>
              
              <div className="space-y-8">
                <div className={`flex gap-6 ${lang === 'ar' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                  <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-2">{t.contact.addressTitle}</h3>
                    <p className="text-xl font-bold text-brand-text leading-tight">{t.contact.addressName}</p>
                  </div>
                </div>

                <div className={`flex gap-6 ${lang === 'ar' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                  <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-2">{t.contact.phoneTitle}</h3>
                    <p className="text-xl font-bold text-brand-text leading-tight" dir="ltr">{t.contact.phoneValue}</p>
                  </div>
                </div>

                <div className={`flex gap-6 ${lang === 'ar' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                  <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h3 className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-2">{t.contact.hoursTitle}</h3>
                    <p className="text-xl font-bold text-brand-text leading-tight">{t.contact.hoursName}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-text mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                {t.contact.socialTitle}
              </h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-text-muted hover:text-brand-gold transition-colors shadow-lg"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <motion.a 
              href="https://wa.me/23562666161"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group block p-8 rounded-[2.5rem] bg-gradient-to-br from-brand-red to-brand-red-dark text-white shadow-3xl relative overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black mb-2">{t.contact.cta}</h3>
                  <p className="opacity-80 font-medium">{lang === 'ar' ? 'نحن متاحون للرد على استفساراتكم' : 'Nous sommes disponibles pour répondre à vos questions'}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <MessageCircle size={32} />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            </motion.a>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[3rem] p-10 md:p-16 border border-white/5 shadow-3xl text-center"
          >
            <div className="w-20 h-20 bg-brand-gold/10 rounded-3xl flex items-center justify-center text-brand-gold mx-auto mb-10">
              <ShoppingBag size={40} />
            </div>
            <h2 className="text-3xl font-black text-brand-text mb-6 leading-tight">{t.newsletter.title}</h2>
            <p className="text-brand-text-muted mb-10 text-lg leading-relaxed font-medium">
              {t.newsletter.desc}
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input 
                type="email" 
                placeholder={t.newsletter.placeholder}
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-brand-text focus:outline-none focus:border-brand-gold/50 transition-all font-medium text-lg placeholder:text-white/20 disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                className="w-full gold-gradient hover:brightness-110 text-brand-bg font-black py-5 rounded-2xl transition-luxury shadow-2xl active:scale-[0.98] disabled:opacity-50 text-lg"
              >
                {newsletterStatus === 'loading' ? '...' : t.newsletter.button}
              </button>
              <AnimatePresence mode="wait">
                {newsletterStatus === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-emerald-400 text-sm mt-4 font-bold flex items-center justify-center gap-2"
                  >
                    <Star size={16} /> {t.newsletter.success}
                  </motion.p>
                )}
                {newsletterStatus === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-brand-red text-sm mt-4 font-bold flex items-center justify-center gap-2"
                  >
                    {t.newsletter.error}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>

            <div className="mt-16 flex flex-col items-center">
              <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-6">{lang === 'ar' ? 'امسح الرمز لعرض المنيو' : 'Scanner pour le menu'}</p>
              <div className="p-4 bg-white rounded-3xl shadow-2xl">
                <QrCode size={120} className="text-brand-bg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const FamilyMenuView: React.FC<{
  lang: Language,
  t: any,
  onBack: () => void,
  addToCart: (item: MenuItem) => void,
  onSelectItem: (item: MenuItem) => void,
  formatPrice: (p: number) => string
}> = ({ lang, t, onBack, addToCart, onSelectItem, formatPrice }) => {
  const trays: MenuItem[] = [
    {
      name: t.familyRoyalMenu.trays.fullLamb.name,
      desc: t.familyRoyalMenu.trays.fullLamb.desc,
      longDesc: lang === 'ar' 
        ? 'وليمة ملكية فاخرة تتكون من خروف يمني كامل مطهو بعناية فائقة في أفران المندي التقليدية. يُقدم اللحم فوق تلال من الأرز البسمتي الفاخر المزين بالمكسرات المحمصة والزبيب السكري، مع الكبدة والبيض المسلوق.'
        : 'Un festin d\'exception composé d\'un agneau yéménite entier cuit à la perfection dans des fours Mandi traditionnels. La viande est servie sur une montagne de riz Basmati de luxe garnie de noix torréfiées, de raisins sucrés, de foie et d\'œufs bouillis.',
      ingredients: lang === 'ar' ? ['خروف يمني كامل', 'أرز ملكي', 'مكسرات مشكلة', 'كبدة طازجة', 'بهارات المندي الخاصة'] : ['Agneau entier', 'Riz Royal', 'Noix assorties', 'Foie frais', 'Épices Mandi spéciales'],
      price: t.familyRoyalMenu.trays.fullLamb.price,
      rawPrice: 135000,
      image: "https://imglink.cc/cdn/2C9ycFPT6K.jpg",
      featured: true
    },
    {
      name: t.familyRoyalMenu.trays.halfLamb.name,
      desc: t.familyRoyalMenu.trays.halfLamb.desc,
      longDesc: lang === 'ar'
        ? 'نصف خروف مندي أو مظبي (حسب الطلب) يُقدم في صينية عائلية كبرى مع الأرز والمرق الحار والسحاوق. وجبة مثالية للتجمعات العائلية التي تبحث عن الأصالة.'
        : 'Un demi-agneau Mandi ou Madhbi (selon votre choix) servi dans un grand plateau familial avec du riz, du bouillon et du Sahawiq (sauce piquante). Un repas idéal pour les réunions familiales.',
      ingredients: lang === 'ar' ? ['نصف خروف يمني', 'أرز مندوزو', 'قرصان بلدي', 'سحاوق وجبن'] : ['Demi-agneau', 'Riz Mandi', 'Pain traditionnel', 'Sauces maison'],
      price: t.familyRoyalMenu.trays.halfLamb.price,
      rawPrice: 70000,
      image: "https://imglink.cc/cdn/Z95lHFNLv5.jpg",
    },
    {
      name: t.familyRoyalMenu.trays.mixedGrill.name,
      desc: t.familyRoyalMenu.trays.mixedGrill.desc,
      longDesc: lang === 'ar'
        ? 'أكبر تشكيلة مشاوي يمكن تذوقها، تضم الكباب والشيش طاووق والريش المشوية على الفحم، تُقدم مع الخبز الساخن والبطاطس والمقبلات المشكلة.'
        : 'Le plus grand assortiment de grillades, comprenant des kebabs, du chiche taouk et des côtelettes grillées au charbon de bois, servi avec du pain chaud, des frites et des mezze variés.',
      ingredients: lang === 'ar' ? ['كباب', 'شيش طاووق', 'ريش غنم', 'مقبلات مشكلة'] : ['Kebabs', 'Chiche Taouk', 'Côtelettes d\'agneau', 'Assortiment de mezze'],
      price: t.familyRoyalMenu.trays.mixedGrill.price,
      rawPrice: 45000,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-brand-bg pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className={`mb-8 flex items-center gap-2 text-brand-gold font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}
        >
          {lang === 'ar' ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          {lang === 'ar' ? 'العودة للرئيسية' : 'Retour à l\'accueil'}
        </button>

        <SectionHeader 
          lang={lang} 
          title={t.familyRoyalMenu.title} 
          subtitle={t.familyRoyalMenu.subtitle} 
          className={lang === 'ar' ? 'text-right' : 'text-left'} 
        />

        <div className="grid gap-12">
          {trays.map((tray, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onSelectItem(tray)}
              className={`glass-card rounded-[3rem] overflow-hidden border border-brand-gold/15 shadow-3xl gold-bloom flex flex-col lg:flex-row cursor-pointer group ${lang === 'ar' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className="lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto overflow-hidden">
                <img src={tray.image} className="w-full h-full object-cover transition-luxury group-hover:scale-110" alt={tray.name} />
              </div>
              <div className={`lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className={`mb-6 flex ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}>
                  <span className="red-gradient text-white text-[10px] md:text-xs px-4 py-1.5 rounded-full font-black tracking-widest uppercase shadow-lg">
                    {tray.name.includes('كامل') || tray.name.includes('Entier') ? (lang === 'ar' ? 'الأكثر فخامة' : 'Le Plus Somptueux') : (lang === 'ar' ? 'عرض عائلي' : 'Offre Famille')}
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-brand-text mb-6 tracking-tight leading-tight group-hover:text-brand-gold transition-colors">{tray.name}</h3>
                <p className="text-brand-text-muted mb-8 text-base sm:text-lg leading-relaxed opacity-90 font-medium">
                  {tray.desc}
                </p>
                <div className={`flex flex-wrap items-center gap-6 mb-10 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="flex flex-col">
                    <span className="text-brand-gold font-black text-4xl sm:text-5xl tracking-tighter">{formatPrice(tray.rawPrice || 0)}</span>
                    <span className="text-[10px] md:text-sm font-bold opacity-50 uppercase tracking-widest">{t.detailedMenu.currency}</span>
                  </div>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); addToCart(tray); }}
                  className="red-gradient hover:brightness-110 text-white px-10 py-4 rounded-xl font-black text-base transition-luxury w-full sm:w-fit shadow-2xl active:scale-95 flex items-center justify-center gap-3"
                >
                  {t.cart.add}
                  <Plus size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const BlogPostDetailView: React.FC<{
  lang: Language,
  t: any,
  post: any,
  onBack: () => void
}> = ({ lang, t, post, onBack }) => {
  if (!post) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-brand-bg pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className={`mb-8 flex items-center gap-2 text-brand-gold font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}
        >
          {lang === 'ar' ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          {lang === 'ar' ? 'العودة للمدونة' : 'Retour au blog'}
        </button>

        <div className="rounded-[3rem] overflow-hidden shadow-3xl mb-12 relative h-[50vh] min-h-[300px]">
          <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent" />
          <div className={`absolute bottom-10 inset-x-8 md:inset-x-12 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-full mb-6 shadow-2xl`}>
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-text mb-4 leading-tight tracking-tighter">
              {post.title}
            </h1>
            <div className={`flex items-center gap-4 text-brand-text-muted text-xs uppercase font-bold tracking-widest ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`flex items-center gap-2 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                <Calendar size={14} className="text-brand-gold" />
                {post.date}
              </div>
              <div className="w-1 h-1 bg-brand-gold rounded-full opacity-30" />
              <span>{lang === 'ar' ? 'قراءة في ٥ دقائق' : '5 min de lecture'}</span>
            </div>
          </div>
        </div>

        <div className={`glass-card p-8 md:p-14 rounded-[3rem] border border-white/5 leading-relaxed text-brand-text/80 text-lg sm:text-xl space-y-8 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <div className="font-medium first-letter:block first-letter:text-5xl first-letter:font-black first-letter:text-brand-gold first-letter:mr-3">
            {post.content}
          </div>
          <div className="py-8">
            <blockquote className={`border-l-4 border-brand-gold pl-8 italic text-brand-text/60 text-2xl font-medium ${lang === 'ar' ? 'border-r-4 border-l-0 pr-8 pl-0' : ''}`}>
              {lang === 'ar' 
                ? '"تذوق الأصالة في كل تفصيل، من مزارع اليمن إليك مباشرة."'
                : '"Goûtez à l\'authenticité dans chaque détail, des fermes du Yémen directement à vous."'}
            </blockquote>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [view, setView] = useState<'home' | 'menu' | 'blog' | 'blog-detail' | 'menu-item-detail' | 'family-menu' | 'contact'>('home');
  const [lastView, setLastView] = useState<'home' | 'menu' | 'family-menu' | 'contact'>('home');
  const [selectedBlogPost, setSelectedBlogPost] = useState<any>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [initialMenuCategory, setInitialMenuCategory] = useState<string>('all');
  
  const navigateToDetail = (item: MenuItem, source: 'home' | 'menu' | 'family-menu') => {
    setSelectedMenuItem(item);
    setLastView(source);
    setView('menu-item-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToMenu = (category: string = 'all') => {
    setInitialMenuCategory(category);
    setView('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const t = TRANSLATIONS[lang];
  const categories = GET_CATEGORIES(t);
  const menuItems = GET_MENU_ITEMS(lang);
  const blogPosts = GET_BLOG_POSTS(t, lang);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    // Optional: show a small toast or open cart
    setIsCartOpen(true);
  };

  const removeFromCart = (name: string) => {
    setCart(prev => prev.filter(i => i.name !== name));
  };

  const updateQuantity = (name: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.name === name) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.rawPrice * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-FR').replace(/\u00A0/g, ' ');
  };

  const handleCheckout = () => {
    const message = cart.map(item => `${item.quantity}x ${item.name} (${formatPrice(item.rawPrice * item.quantity)} ${t.detailedMenu.currency})`).join('\n');
    const totalMsg = `\nTotal: ${formatPrice(cartTotal)} ${t.detailedMenu.currency}`;
    const fullMsg = encodeURIComponent(`${lang === 'ar' ? 'مرحباً شيف فارس، أود طلب ما يلي:' : 'Bonjour Chef Faris, je souhaite commander:'}\n\n${message}${totalMsg}`);
    window.open(`https://wa.me/23562666161?text=${fullMsg}`, '_blank');
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterStatus('loading');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterEmail('');
        setTimeout(() => setNewsletterStatus('idle'), 5000);
      } else {
        setNewsletterStatus('error');
        setTimeout(() => setNewsletterStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Newsletter error:', error);
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 5000);
    }
  };

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  return (
    <div className={`min-h-screen selection:bg-brand-red/30 selection:text-brand-gold ${lang === 'ar' ? 'font-sans' : 'font-sans'}`} dir={t.dir}>
      <Navbar lang={lang} setLang={setLang} t={t} setView={setView} navigateToMenu={navigateToMenu} />

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero Section */}
            <section id="home" className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 z-0 scale-110">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover opacity-50 md:opacity-60"
            alt="Hero Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 cinematic-overlay" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-brand-gold text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 md:mb-6 bg-brand-gold/10 px-4 py-1 rounded-full border border-brand-gold/20">
              {lang === 'ar' ? 'المذاق اليمني العتيق' : 'Gastronomie Yéménite Authentique'}
            </span>
            <h1 
              className="text-4xl xs:text-5xl md:text-7xl lg:text-8xl font-black text-brand-text mb-6 md:mb-10 leading-[1.1] tracking-tight"
            >
              {lang === 'ar' ? (
                <>أهلاً بكم في <span className="text-brand-gold">مطعم الشيف فارس</span> اليمني</>
              ) : (
                <>L'authentique cuisine <span className="text-brand-gold">Yéménite</span> par le Chef Faris</>
              )}
            </h1>
          </motion.div>
          
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-base sm:text-lg md:text-2xl text-brand-text-muted mb-8 md:mb-12 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="flex justify-center"
          >
            <button 
              onClick={() => setView('menu')}
              className="red-gradient hover:brightness-110 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-bold text-sm md:text-base transition-luxury gold-bloom shadow-xl active:scale-95 group"
            >
              <span className="flex items-center gap-2">
                {t.hero.cta1}
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
           <span className="text-brand-gold/50 text-[10px] md:text-sm font-bold tracking-widest uppercase">{t.hero.scroll}</span>
           <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
             <ChevronDown size={28} className="text-brand-gold/70" />
           </motion.div>
        </div>
      </section>

      {/* Offer of the Day */}
      <section id="offers" className="py-20 md:py-32 bg-brand-surface relative overflow-hidden yemeni-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <SectionHeader 
            lang={lang} 
            title={t.offerDay.title} 
            subtitle={t.offerDay.subtitle || ""} 
            className={`${lang === 'ar' ? 'text-right' : 'text-left'}`}
          />

            <div 
              className={`grid lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden border border-brand-gold/15 shadow-3xl gold-bloom glass-card cursor-pointer ${lang === 'fr' ? 'lg:flex-row-reverse' : ''}`}
              onClick={() => {
                navigateToDetail(menuItems.main[1], 'home');
              }}
            >
             <div className="h-[300px] sm:h-[400px] lg:h-auto overflow-hidden relative group">
               <img 
                 src={menuItems.main[1].image} 
                 className="w-full h-full object-cover transition-luxury group-hover:scale-105" 
                 alt={menuItems.main[1].name}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent opacity-60 lg:hidden" />
             </div>
             <div className={`p-8 sm:p-12 lg:p-16 flex flex-col justify-center ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
               <div className={`mb-6 flex ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}>
                 <span className="red-gradient text-white text-[10px] md:text-xs px-4 py-1.5 rounded-full font-black tracking-widest uppercase shadow-lg animate-pulse">{t.offerDay.badge}</span>
               </div>
               <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-text mb-6 tracking-tight leading-tight">{menuItems.main[1].name}</h3>
               <p className="text-brand-text-muted mb-8 md:mb-10 text-base sm:text-lg leading-relaxed opacity-90 font-medium">
                 {menuItems.main[1].desc}
               </p>
               <div className={`flex flex-wrap items-center gap-4 sm:gap-8 mb-10 ${lang === 'ar' ? 'flex-row' : 'flex-row-reverse justify-end'}`}>
                 <div className="flex flex-col">
                   <span className="text-brand-gold font-black text-4xl sm:text-5xl tracking-tighter">{formatPrice(menuItems.main[1].rawPrice || 0)}</span>
                   <span className="text-[10px] md:text-sm font-bold opacity-50 uppercase tracking-widest">{t.offerDay.currency}</span>
                 </div>
                 <span className="w-12 h-px bg-brand-gold/20 hidden sm:block"></span>
                 <div className="flex flex-col opacity-40">
                    <span className="text-brand-text-muted text-xl sm:text-2xl line-through font-bold tracking-tighter">{formatPrice(12000)}</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest">{t.offerDay.currency}</span>
                 </div>
               </div>
               <button 
                 onClick={(e) => { e.stopPropagation(); addToCart(menuItems.main[1]); }}
                 className="gold-gradient hover:brightness-110 text-brand-bg px-10 py-4 rounded-xl font-black text-base md:text-lg transition-luxury w-full sm:w-fit shadow-2xl active:scale-95 group"
               >
                  <span className="flex items-center justify-center gap-3">
                    {t.offerDay.cta}
                    <Plus size={20} />
                  </span>
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* Menu Categories Grid */}
      <section id="menu" className="py-20 md:py-32 bg-brand-bg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <SectionHeader 
            lang={lang}
            title={t.categories.title} 
            subtitle={t.categories.subtitle}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {categories.map((cat, idx) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -12 }}
                onClick={() => navigateToMenu(cat.id)}
                className="group relative h-72 sm:h-80 md:h-96 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl glass-card border border-white/5"
              >
                <img src={cat.image} className="w-full h-full object-cover transition-luxury group-hover:scale-110 brightness-[0.4] group-hover:brightness-50" alt={cat.name} />
                <div className={`absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent flex flex-col justify-end p-8 sm:p-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-gold mb-2 tracking-tight group-hover:translate-x-2 transition-transform">{cat.name}</h3>
                  <p className="text-brand-text/70 text-sm md:text-base font-medium leading-relaxed max-w-xs">{cat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Menu Section */}
      <section className="py-20 md:py-32 bg-brand-surface relative yemeni-pattern border-y border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <SectionHeader lang={lang} title={t.detailedMenu.title} subtitle={t.detailedMenu.subtitle} />
          
          <div className={`grid lg:grid-cols-12 gap-6 md:gap-10`}>
            {/* Featured Item */}
            <div 
              className={`lg:col-span-8 group glass-card rounded-[2.5rem] overflow-hidden border border-brand-gold/10 hover:border-brand-gold/30 transition-luxury flex flex-col shadow-3xl cursor-pointer`}
              onClick={() => {
                navigateToDetail(menuItems.main[0], 'home');
              }}
            >
              <div className="h-[300px] sm:h-[450px] overflow-hidden relative">
                <img src={menuItems.main[0].image} className="w-full h-full object-cover transition-luxury group-hover:scale-105" alt="Featured Menu Item" />
                <div className={`absolute top-6 md:top-8 ${lang === 'ar' ? 'left-6 md:left-8' : 'right-6 md:right-8'} red-gradient text-white py-1.5 px-5 rounded-full font-black text-[10px] md:text-xs shadow-2xl tracking-[0.2em] uppercase`}>{t.detailedMenu.status}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent" />
              </div>
              <div className={`p-8 sm:p-12 flex flex-col md:flex-row justify-between items-end gap-10 relative ${lang === 'ar' ? 'text-right' : 'text-left md:flex-row-reverse'}`}>
                <div className="flex-1">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-text mb-4 tracking-tighter leading-tight">{menuItems.main[0].name}</h3>
                  <p className="text-brand-text-muted text-base sm:text-xl max-w-xl leading-relaxed font-medium opacity-80 mb-6">{menuItems.main[0].desc}</p>
                  <button 
                    onClick={(e) => { e.stopPropagation(); addToCart(menuItems.main[0]); }}
                    className="bg-brand-gold text-brand-bg px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-luxury flex items-center gap-3 shadow-xl"
                  >
                    <Plus size={18} /> {t.cart.add}
                  </button>
                </div>
                <div className={`shrink-0 flex flex-col ${lang === 'ar' ? 'items-start' : 'items-end'} font-black`}>
                  <div className="flex items-baseline gap-1">
                    <span className="text-brand-gold text-4xl sm:text-6xl tracking-tighter">{formatPrice(menuItems.main[0].rawPrice || 0)}</span>
                    <span className="text-brand-text-muted text-xs sm:text-sm uppercase tracking-widest opacity-40">{t.detailedMenu.currency}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* List of Other items */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {menuItems.main.slice(1).map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => {
                    navigateToDetail(item, 'home');
                  }}
                  className={`glass-card p-4 sm:p-6 rounded-3xl border border-brand-gold/5 flex gap-5 hover:bg-brand-gold/5 transition-luxury cursor-pointer group shadow-xl ${lang === 'ar' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
                >
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                    <img src={item.image} className="w-full h-full object-cover transition-luxury group-hover:scale-110" alt={item.name} />
                  </div>
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    <h4 className="font-black text-brand-text text-lg sm:text-xl mb-1 truncate">{item.name}</h4>
                    <p className="text-brand-text-muted text-xs sm:text-sm mb-4 line-clamp-2 opacity-60 leading-relaxed">{item.desc}</p>
                    <div className={`flex items-center justify-between ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className="flex items-center gap-1">
                         <span className="text-brand-gold font-black text-lg sm:text-xl tracking-tighter">{formatPrice(item.rawPrice || 0)}</span>
                         <span className="text-[10px] font-bold opacity-30 uppercase tracking-widest">{t.detailedMenu.currency}</span>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                        className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity bg-brand-gold text-brand-bg p-2 rounded-lg shadow-xl active:scale-90"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Apps & Drinks sections with similar grid pattern */}
          <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-bold text-brand-gold mb-8 flex items-center gap-3 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}>
                {t.detailedMenu.appsTitle} <div className="w-12 h-px bg-brand-gold/30" />
              </h3>
              <div className="space-y-6">
                {menuItems.appetizers.map((item, i) => (
                  <div 
                    key={i} 
                    onClick={() => {
                      navigateToDetail(item, 'home');
                    }}
                    className={`flex items-center gap-4 glass-card p-4 rounded-xl border border-white/5 hover:border-brand-gold/30 transition-all cursor-pointer group ${lang === 'ar' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
                  >
                    <img src={item.image} className="w-16 h-16 rounded-full object-cover border-2 border-brand-gold/30" alt={item.name} />
                    <div className="flex-1">
                      <div className={`flex items-center ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <h4 className="font-bold text-brand-text group-hover:text-brand-gold transition-colors">{item.name}</h4>
                        <div className="menu-dot opacity-40"></div>
                        <div className={`flex items-center gap-3 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                          <span className="text-brand-gold font-bold text-sm whitespace-nowrap">{formatPrice(item.rawPrice || 0)} {t.detailedMenu.currency}</span>
                          <button 
                            onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                            className="bg-brand-gold text-brand-bg p-1 rounded-md shadow-md hover:scale-110 active:scale-90 transition-transform"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <p className="text-brand-text-muted text-[10px] mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className={`text-2xl font-bold text-brand-gold mb-8 flex items-center gap-3 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}>
                {t.detailedMenu.dessertTitle} <div className="w-12 h-px bg-brand-gold/30" />
              </h3>
              <div 
                onClick={() => navigateToDetail(menuItems.dessert[0], 'home')}
                className="bg-brand-bg rounded-2xl overflow-hidden border border-brand-gold/10 relative p-8 group cursor-pointer"
              >
                 <img src="https://imglink.cc/cdn/rOJgNL58P_.jpeg" className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale hover:grayscale-0 transition-all duration-700" alt="Dessert cover" />
                 <div className="relative z-10 text-center">
                    <h4 className="text-3xl font-black text-brand-text mb-4 group-hover:text-brand-gold transition-colors">{t.detailedMenu.dessertPromoTitle}</h4>
                    <p className="text-brand-text-muted mb-6">{t.detailedMenu.dessertPromoDesc}</p>
                    <span className="text-4xl font-black text-brand-gold block mb-8">{formatPrice(25000)} <span className="text-sm uppercase opacity-60">{t.detailedMenu.currency}</span></span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); addToCart(menuItems.dessert[0]); }}
                      className="bg-brand-gold text-brand-bg px-8 py-3 rounded-xl font-black transition-luxury shadow-2xl hover:brightness-110 active:scale-95 uppercase tracking-widest text-xs flex items-center justify-center gap-2 mx-auto"
                    >
                      <Plus size={18} />
                      {t.cart.add}
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions & Offers Grid */}
      <section id="offers" className="py-20 md:py-32 bg-brand-bg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <SectionHeader lang={lang} title={t.exclusives.title} subtitle={t.exclusives.subtitle} />

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <div className="md:col-span-2 red-gradient p-8 sm:p-12 md:p-16 rounded-[2.5rem] border border-brand-gold/30 flex flex-col justify-between relative overflow-hidden group shadow-3xl">
               <ArrowUpRight className={`absolute top-8 ${lang === 'ar' ? 'left-8' : 'right-8'} text-white/10 group-hover:text-brand-gold transition-luxury group-hover:scale-150 group-hover:rotate-12`} size={64} />
               <div className={`relative z-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">{t.exclusives.family.title}</h3>
                  <p className="text-white/80 text-base sm:text-xl max-w-sm sm:max-w-md leading-relaxed font-medium">{t.exclusives.family.desc}</p>
               </div>
               <div className={`mt-10 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10 ${lang === 'ar' ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
                   <div className={`flex flex-col ${lang === 'ar' ? 'items-end' : 'items-start'}`}>
                    <span className="text-white/40 line-through text-lg sm:text-2xl font-bold">{formatPrice(60000)}</span>
                    <span className="text-brand-gold font-black text-4xl sm:text-6xl tracking-tighter">{formatPrice(45000)}</span>
                  </div>
                  <button 
                    onClick={() => setView('family-menu')}
                    className="w-full sm:w-auto bg-white text-brand-red-dark px-10 sm:px-12 py-4 rounded-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-luxury uppercase tracking-widest text-sm"
                  >
                    {t.exclusives.family.cta}
                  </button>
               </div>
               <div className="absolute -bottom-20 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className={`md:col-span-2 glass-card border border-brand-gold/15 rounded-[2.5rem] p-8 sm:p-12 flex flex-col lg:flex-row gap-8 sm:gap-12 items-center justify-between gold-bloom shadow-3xl ${lang === 'ar' ? 'text-right' : 'text-left lg:flex-row-reverse'}`}>
              <div className="flex-1">
                <h3 className="text-3xl sm:text-4xl font-black text-brand-gold mb-4 tracking-tighter leading-tight">{t.newsletter.title}</h3>
                <p className="text-brand-text-muted text-base sm:text-xl font-medium opacity-80 leading-relaxed">{t.newsletter.desc}</p>
              </div>
              <div className="w-full lg:w-auto">
                <form onSubmit={handleNewsletterSubmit} className={`flex flex-col sm:flex-row gap-4 ${lang === 'ar' ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
                  <div className="flex-1 relative">
                    <input 
                      type="email" 
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder={t.newsletter.placeholder} 
                      disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                      className={`w-full sm:w-72 md:w-80 lg:w-96 bg-brand-bg/60 border border-brand-gold/20 rounded-xl px-6 py-4 text-brand-text focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none font-bold text-sm tracking-wide disabled:opacity-50 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                    />
                    <AnimatePresence mode="wait">
                      {newsletterStatus === 'success' && (
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`absolute -bottom-6 left-0 right-0 text-xs font-bold text-green-500 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                        >
                          {t.newsletter.success}
                        </motion.p>
                      )}
                      {newsletterStatus === 'error' && (
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`absolute -bottom-6 left-0 right-0 text-xs font-bold text-brand-red ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                        >
                          {t.newsletter.error}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <button 
                    type="submit"
                    disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                    className="w-full sm:w-auto red-gradient text-white font-black px-10 py-4 rounded-xl shadow-2xl hover:brightness-110 active:scale-95 transition-luxury uppercase tracking-widest text-xs disabled:opacity-50 disabled:grayscale"
                  >
                    {newsletterStatus === 'loading' ? '...' : t.newsletter.button}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blog" className="py-20 md:py-32 bg-brand-surface relative overflow-hidden border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <SectionHeader lang={lang} title={t.blog.title} subtitle={t.blog.subtitle} />

          <div className="grid lg:grid-cols-12 gap-8 md:gap-10">
            <article className="lg:col-span-8 group glass-card rounded-[2.5rem] overflow-hidden border border-brand-gold/10 relative shadow-3xl">
               <div className="h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
                 <img src={blogPosts[0].image} className="w-full h-full object-cover transition-luxury group-hover:scale-105" alt="Blog Featured" />
                 <div className="absolute inset-0 cinematic-overlay" />
               </div>
               <div className={`p-8 sm:p-12 absolute bottom-0 right-0 left-0 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                 <span className="gold-gradient text-brand-bg px-4 py-1.5 rounded-lg text-[10px] sm:text-xs font-black mb-4 inline-block shadow-2xl uppercase tracking-[0.2em]">{blogPosts[0].category}</span>
                 <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-brand-text mb-4 transition-colors group-hover:text-brand-gold leading-tight tracking-tighter">{blogPosts[0].title}</h3>
                 <p className="text-brand-text-muted mb-8 text-base sm:text-xl line-clamp-2 max-w-3xl font-medium opacity-80 leading-relaxed">{t.blog.postDesc}</p>
                 <button 
                    onClick={() => { 
                      setSelectedBlogPost(blogPosts[0]); 
                      setView('blog-detail'); 
                      window.scrollTo({ top: 0, behavior: 'smooth' }); 
                    }}
                    className={`flex items-center gap-3 text-brand-gold font-black text-sm uppercase tracking-widest hover:gap-5 transition-luxury active:gap-3 ${lang === 'ar' ? 'mr-auto' : 'ml-auto'}`}
                  >
                    {t.blog.readMore} 
                    {lang === 'ar' ? <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> : <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                 </button>
               </div>
            </article>

            <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-8 md:gap-10">
              {blogPosts.slice(1).map((post, i) => (
                <div 
                  key={i} 
                  onClick={() => { 
                    setSelectedBlogPost(post); 
                    setView('blog-detail'); 
                    window.scrollTo({ top: 0, behavior: 'smooth' }); 
                  }}
                  className={`group bg-brand-bg rounded-[2rem] overflow-hidden border border-brand-gold/10 hover:bg-brand-surface-light transition-luxury flex flex-col cursor-pointer shadow-xl ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                >
                  <div className="h-48 sm:h-56 lg:h-48 overflow-hidden">
                    <img src={post.image} className="w-full h-full object-cover transition-luxury group-hover:scale-105" alt={post.title} />
                  </div>
                  <div className="p-6 sm:p-8">
                    <span className="text-brand-gold text-[10px] font-black mb-2 block uppercase tracking-widest opacity-60">{post.category}</span>
                    <h4 className="font-black text-brand-text text-lg sm:text-xl mb-4 leading-snug group-hover:text-brand-gold transition-colors tracking-tight line-clamp-2">{post.title}</h4>
                    <div className={`text-brand-text-muted text-[10px] font-bold flex items-center gap-2 opacity-40 uppercase tracking-widest ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}>
                      {post.date} <Clock size={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="py-20 md:py-32 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
               <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-brand-gold mb-8 tracking-tighter leading-tight">{t.contact.title}</h2>
               <p className="text-brand-text-muted text-base sm:text-xl mb-12 leading-relaxed opacity-90 font-medium max-w-2xl">{t.contact.desc}</p>
               
               <div className="space-y-8 md:space-y-10">
                 <div className={`flex items-start gap-6 group ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                   <div className="glass-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-brand-gold/15 shadow-2xl group-hover:border-brand-gold/50 transition-luxury shrink-0 gold-bloom">
                      <MapPin size={28} className="text-brand-gold" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <h4 className="font-black text-brand-text text-lg sm:text-xl mb-1 tracking-tight">{t.contact.addressTitle}</h4>
                     <p className="text-brand-text-muted text-sm sm:text-lg font-medium opacity-70 leading-relaxed">{t.contact.addressName}</p>
                   </div>
                 </div>
                 <div className={`flex items-start gap-6 group ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                   <div className="glass-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-brand-gold/15 shadow-2xl group-hover:border-brand-gold/50 transition-luxury shrink-0 gold-bloom">
                      <Clock size={28} className="text-brand-gold" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <h4 className="font-black text-brand-text text-lg sm:text-xl mb-1 tracking-tight">{t.contact.hoursTitle}</h4>
                     <p className="text-brand-text-muted text-sm sm:text-lg font-medium opacity-70 leading-relaxed">{t.contact.hoursName}</p>
                   </div>
                 </div>
                 <div className={`flex items-start gap-6 group ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                   <div className="glass-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-brand-gold/15 shadow-2xl group-hover:border-brand-gold/50 transition-luxury shrink-0 gold-bloom">
                      <Phone size={28} className="text-brand-gold" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <h4 className="font-black text-brand-text text-lg sm:text-xl mb-1 tracking-tight">{t.contact.phoneTitle}</h4>
                     <p className="text-brand-text-muted text-sm sm:text-xl font-mono tracking-widest opacity-80" dir="ltr">{t.contact.phoneValue}</p>
                   </div>
                 </div>
               </div>

               <a 
                 href="https://wa.me/23562666161"
                 target="_blank"
                 rel="noopener noreferrer"
                 className={`mt-12 sm:mt-16 bg-brand-red text-white px-10 sm:px-12 py-4 sm:py-5 rounded-2xl font-black flex items-center justify-center gap-4 transition-luxury gold-bloom hover:bg-brand-red-dark active:scale-95 uppercase tracking-widest text-xs sm:text-sm w-full sm:w-auto shadow-2xl`}
               >
                  {t.contact.cta} {lang === 'ar' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
               </a>
            </div>
            
            <div className="h-[400px] sm:h-[500px] lg:h-[600px] rounded-[3rem] overflow-hidden border border-brand-gold/20 shadow-3xl relative grayscale hover:grayscale-0 transition-luxury">
               {/* Mock Map Background */}
               <img 
                 src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                 className="w-full h-full object-cover" 
                 alt="Map"
               />
               <div className="absolute inset-0 bg-brand-gold/5 mix-blend-overlay" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 sm:scale-100">
                 <div className="relative">
                   <div className="absolute -inset-8 bg-brand-red animate-ping rounded-full opacity-20" />
                   <div className="bg-brand-red text-white p-5 rounded-full shadow-3xl gold-bloom relative z-10">
                     <MapPin size={36} fill="white" />
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-bg pt-20 md:pt-32 pb-10 border-t border-brand-gold/10 relative overflow-hidden">
        <div className="yemeni-pattern absolute inset-0 opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-20 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className="lg:col-span-2">
              <img 
                src="https://imglink.cc/cdn/UXR3BKH9gj.png" 
                alt={t.brand} 
                className={`h-20 sm:h-24 w-auto object-contain mb-8 ${lang === 'ar' ? 'mr-auto' : 'ml-0'}`} 
              />
              <p className="text-brand-text-muted text-base sm:text-xl max-w-md mb-10 leading-relaxed font-medium opacity-80">{t.footer.desc}</p>
              <div className={`flex gap-4 sm:gap-6 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}>
                {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 sm:w-16 sm:h-16 rounded-[1.25rem] sm:rounded-2xl glass-card flex items-center justify-center text-brand-gold hover:gold-gradient hover:text-brand-bg transition-luxury shadow-xl border border-white/5 active:scale-90">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
            <div>
               <h4 className="text-lg font-black text-brand-text mb-8 tracking-wide uppercase opacity-90">{t.footer.quickLinks}</h4>
               <ul className="space-y-5">
                 {[
                   { name: t.nav.home, onClick: () => setView('home') },
                   { name: t.nav.offers, href: '#offers' },
                   { name: t.nav.menu, onClick: () => navigateToMenu('all') },
                   { name: t.nav.blog, onClick: () => setView('blog') },
                   { name: t.nav.contact, onClick: () => setView('contact') },
                 ].map(l => (
                   <li key={l.name}>
                     {l.onClick ? (
                       <button onClick={l.onClick} className="text-brand-text-muted text-base hover:text-brand-gold transition-colors font-medium">
                         {l.name}
                       </button>
                     ) : (
                       <a href={l.href} className="text-brand-text-muted text-base hover:text-brand-gold transition-colors font-medium">
                         {l.name}
                       </a>
                     )}
                   </li>
                 ))}
               </ul>
            </div>
            <div>
               <h4 className="text-lg font-black text-brand-text mb-8 tracking-wide uppercase opacity-90">{t.footer.legal}</h4>
               <ul className="space-y-5">
                 <li><a href="#" className="text-brand-text-muted text-base hover:text-brand-gold transition-colors font-medium">{t.footer.privacy}</a></li>
                 <li><a href="#" className="text-brand-text-muted text-base hover:text-brand-gold transition-colors font-medium">{t.footer.terms}</a></li>
                 <li><a href="#" className="text-brand-text-muted text-base hover:text-brand-gold transition-colors font-medium">{t.footer.delivery}</a></li>
               </ul>
            </div>
          </div>
          <div className={`border-t border-brand-gold/10 pt-10 text-center flex flex-col items-center justify-between gap-6 ${lang === 'ar' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <p className="text-brand-text-muted text-sm font-medium opacity-60">{t.footer.copyright}</p>
            <p className="text-brand-gold font-black text-sm tracking-widest uppercase">{t.footer.madeBy}</p>
          </div>
        </div>
      </footer>
          </motion.div>
        ) : view === 'menu' ? (
          <MenuView 
            key="menu"
            lang={lang} 
            t={t} 
            addToCart={addToCart} 
            menuItems={menuItems} 
            formatPrice={formatPrice}
            onBack={() => setView('home')} 
            onSelectItem={(item) => navigateToDetail(item, 'menu')} 
            initialCategory={initialMenuCategory}
          />
        ) : view === 'menu-item-detail' ? (
          <MenuItemDetailView
            key="menu-item-detail"
            lang={lang}
            t={t}
            item={selectedMenuItem}
            formatPrice={formatPrice}
            onBack={() => setView(lastView)}
            addToCart={addToCart}
          />
        ) : view === 'blog' ? (
          <BlogView 
            key="blog"
            lang={lang} 
            t={t} 
            blogPosts={blogPosts} 
            onBack={() => setView('home')} 
            onSelectPost={(post) => {
              setSelectedBlogPost(post);
              setView('blog-detail');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : view === 'family-menu' ? (
          <FamilyMenuView
            key="family-menu"
            lang={lang}
            t={t}
            formatPrice={formatPrice}
            onBack={() => setView('home')}
            addToCart={addToCart}
            onSelectItem={(item) => navigateToDetail(item, 'family-menu')}
          />
        ) : view === 'contact' ? (
          <ContactView
            key="contact"
            lang={lang}
            t={t}
            newsletterEmail={newsletterEmail}
            setNewsletterEmail={setNewsletterEmail}
            newsletterStatus={newsletterStatus}
            handleNewsletterSubmit={handleNewsletterSubmit}
          />
        ) : (
          <BlogPostDetailView
            key="blog-detail"
            lang={lang}
            t={t}
            post={selectedBlogPost}
            onBack={() => setView('blog')}
          />
        )}
      </AnimatePresence>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/23562666161" 
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-28 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center ${lang === 'ar' ? 'left-8' : 'right-8'}`}
      >
        <MessageCircle size={32} fill="white" className="text-transparent" />
      </a>

      {/* Floating Cart Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: cartCount > 0 ? 1 : 0 }}
        onClick={() => setIsCartOpen(true)}
        className={`fixed bottom-8 z-50 red-gradient text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center ${lang === 'ar' ? 'left-8' : 'right-8'}`}
      >
        <ShoppingBag size={32} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-bg text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-brand-bg shadow-lg">
            {cartCount}
          </span>
        )}
      </motion.button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: lang === 'ar' ? -400 : 400 }}
              animate={{ x: 0 }}
              exit={{ x: lang === 'ar' ? -400 : 400 }}
              className={`fixed top-0 bottom-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-full sm:w-[400px] bg-brand-bg z-[70] shadow-3xl flex flex-col`}
            >
              <div className={`p-6 border-b border-brand-gold/10 flex items-center justify-between ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`flex items-center gap-3 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <ShoppingBag className="text-brand-gold" size={24} />
                  <h2 className="text-xl font-black text-brand-text tracking-tight uppercase">{t.cart.title}</h2>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="text-brand-text-muted hover:text-brand-gold transition-colors p-2">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                    <ShoppingBag size={64} className="mb-4 text-brand-gold/20" />
                    <p className="font-bold text-brand-text-muted">{t.cart.empty}</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.name} className={`flex gap-4 p-4 glass-card rounded-2xl border border-white/5 ${lang === 'ar' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-brand-gold/10">
                        <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-black text-brand-text truncate mb-1">{item.name}</h4>
                        <p className="text-brand-gold font-bold text-sm mb-3">{formatPrice(item.rawPrice)} {t.detailedMenu.currency}</p>
                        <div className={`flex items-center justify-between ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`flex items-center gap-4 bg-white/5 rounded-lg border border-white/10 p-1 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                            <button onClick={() => updateQuantity(item.name, -1)} className="p-1 hover:text-brand-gold transition-colors">
                              <Minus size={14} />
                            </button>
                            <span className="font-black text-sm w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.name, 1)} className="p-1 hover:text-brand-gold transition-colors">
                              <Plus size={14} />
                            </button>
                          </div>
                          <button onClick={() => removeFromCart(item.name)} className="text-brand-red p-2 hover:bg-brand-red/10 rounded-lg transition-all">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-brand-gold/10 bg-brand-surface-light/50 backdrop-blur-xl">
                  <div className={`flex justify-between items-center mb-6 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <span className="font-bold text-brand-text-muted">{t.cart.total}</span>
                    <span className="text-2xl font-black text-brand-gold tracking-tighter">{formatPrice(cartTotal)} {t.detailedMenu.currency}</span>
                  </div>
                  <button 
                    onClick={handleCheckout}
                    className="w-full red-gradient text-white py-4 rounded-xl font-black shadow-2xl flex items-center justify-center gap-3 hover:brightness-110 active:scale-95 transition-luxury uppercase tracking-widest text-sm"
                  >
                    <MessageCircle size={20} fill="white" className="text-transparent" />
                    {t.cart.checkout}
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
