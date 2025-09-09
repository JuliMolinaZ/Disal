'use client';

import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'report';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function SEOHead({
  title = 'Reporte Ejecutivo de Inventario - Análisis Inteligente de Datos',
  description = 'Transformación digital de inventarios con análisis avanzado de datos, métricas clave y insights accionables para la toma de decisiones estratégicas.',
  keywords = [
    'inventario',
    'análisis de datos',
    'reporte ejecutivo',
    'business intelligence',
    'optimización',
    'métricas',
    'dashboard',
    'datos',
    'estadísticas',
    'gestión'
  ],
  image = '/og-image.jpg',
  url = 'https://reporte-inventario.com',
  type = 'report',
  author = 'Equipo de Análisis',
  publishedTime = new Date().toISOString(),
  modifiedTime = new Date().toISOString(),
  section = 'Business Intelligence',
  tags = ['inventario', 'datos', 'análisis', 'ejecutivo']
}: SEOHeadProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sistema de Análisis de Inventario',
      logo: {
        '@type': 'ImageObject',
        url: '/logo.png'
      }
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    articleSection: section,
    keywords: keywords.join(', '),
    about: {
      '@type': 'Thing',
      name: 'Análisis de Inventario'
    }
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: url
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Reportes',
        item: `${url}/reportes`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Inventario',
        item: `${url}/reportes/inventario`
      }
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="es" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Reporte Ejecutivo de Inventario" />
      <meta property="og:site_name" content="Sistema de Análisis de Inventario" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Reporte Ejecutivo de Inventario" />
      <meta name="twitter:creator" content="@inventario_analisis" />
      <meta name="twitter:site" content="@inventario_analisis" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Reporte Inventario" />
      <meta name="application-name" content="Reporte Inventario" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      {/* Additional SEO Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="bing-site-verification" content="your-bing-verification-code" />

      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* Cache Control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      <meta httpEquiv="Expires" content={new Date(Date.now() + 31536000000).toUTCString()} />
    </Head>
  );
}

// Analytics Component
export function AnalyticsHead() {
  return (
    <Head>
      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: 'Reporte Ejecutivo de Inventario',
              page_location: window.location.href,
              custom_map: {
                'custom_parameter_1': 'inventario_analysis'
              }
            });
          `
        }}
      />

      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `
        }}
      />
    </Head>
  );
}

// Performance Monitoring
export function PerformanceHead() {
  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Performance monitoring
            window.addEventListener('load', function() {
              // Core Web Vitals
              if ('web-vital' in window) {
                import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                  getCLS(console.log);
                  getFID(console.log);
                  getFCP(console.log);
                  getLCP(console.log);
                  getTTFB(console.log);
                });
              }
              
              // Custom performance metrics
              const navigation = performance.getEntriesByType('navigation')[0];
              const paint = performance.getEntriesByType('paint');
              
              console.log('Navigation timing:', {
                domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
                firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
                firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime
              });
            });
          `
        }}
      />
    </Head>
  );
}
