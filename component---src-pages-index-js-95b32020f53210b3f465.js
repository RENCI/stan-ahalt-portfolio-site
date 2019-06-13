(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"imageQuery",function(){return u});var i=a(0),r=a.n(i),n=a(2),o=a(179),s=a(180),l=a(186),d=a.n(l),c=Object(n.a)(d.a).withConfig({displayName:"pages__ProfileImage",componentId:"sc-6kvjaa-0"})(["border-radius:1rem;margin-bottom:2rem;filter:sepia(50%) opacity(0.9) drop-shadow(0 0 3px rgba(0,0,0,0.2));z-index:0;"]);t.default=function(e){return console.log(e.data.imageSharp),r.a.createElement("div",null,r.a.createElement(c,{fluid:e.data.imageSharp.childImageSharp.fluid,alt:"Stan Ahalt sitting at his desk in his office in front of large windows"}),r.a.createElement(o.c,null,"Biography"),r.a.createElement("p",null,"Stanley C. Ahalt is director of the Renaissance Computing Institute (RENCI), professor of computer science at the University of North Carolina at Chapel Hill, and the head of the Biomedical Informatics Core for the North Carolina Translational and Clinical Sciences Institute (NC TraCS). He is principal investigator for the Water Science Software Institute project, which seeks to build a cyberinfrastructure for managing, sharing and using water science data. As director of RENCI, he was instrumental in launching two major data science initiatives: The National Consortium for Data Science (NCDS), a public-private partnership to address big data challenges and opportunities in research and business; and iRODS, an effort to develop a branch of the popular integrated Rule-Oriented Data System as enterprise-quality software, complete with rigorous testing and a robust, feature-rich code base."),r.a.createElement("p",null,"Dr. Ahalt serves as a member of the executive board of the ",r.a.createElement("a",{href:"https://irods.org",target:"_blank",rel:"noopener noreferrer"},"iRODS Consortium"),", an international group focused on long-term sustainability of the iRODS data management platform. He is also a co-PI with the DataNet Federation Consortium, a National Science Foundation project to prototype an integrated platform for sharing, using and managing data across distances and scientific fields. Other leadership roles include past chair of the Coalition for Academic Scientific Computing, former co-chair of the Ohio Broadband Council, extramural member of the National Cancer Institute’s Advanced Biomedical Computing Center’s Oversight Committee, and member of the Council on Competitiveness High Performance Computing Advisory Committee. He has authored or co-authored more than 120 technical papers and been principal investigator or co-principal investigator on research grants totaling more than $17 million. His recent research publications have focused on decoupling data through encryption."),r.a.createElement("p",null,"Before coming to RENCI in 2009, Dr. Ahalt was executive director of the Ohio Supercomputer Center (OSC) from 2003 – 2009 and a professor in the Department of Electrical and Computer Engineering at The Ohio State University for 22 years.  Ahalt launched several model programs at OSC, including Blue Collar Computing, a national program to bring high performance computing to a wide spectrum of industries and applications, and OSCnet, a leading high-speed research network for K-12 schools, higher education and economic development. He holds a Ph.D. in electrical and computer engineering from Clemson University and master’s and bachelor’s degrees in electrical engineering from Virginia Polytechnic Institute and State University."),r.a.createElement(o.c,null,"Education"),r.a.createElement(s.a,null,r.a.createElement(s.b,null,"Ph.D. in  Electrical  and Computer Engineering Clemson University (1986)"),r.a.createElement(s.b,null,"M.S. in Electrical Engineering Virginia Tech (1980)"),r.a.createElement(s.b,null,"B.S. in Electrical Engineering Virginia Tech (1978)")))};var u="3731975981"},179:function(e,t,a){"use strict";var i=a(2),r=a(1),n=a.n(r),o=i.a.h2.withConfig({displayName:"Typography__Title",componentId:"j4jyvl-0"})(["text-align:left;"," ",""],function(e){return e.center&&"text-align: center;"},function(e){return e.right&&"text-align: right;"});o.propTypes={children:n.a.node.isRequired};var s=i.a.div.withConfig({displayName:"Typography__Paragraph",componentId:"j4jyvl-1"})(["text-align:left;"," ",""],function(e){return e.center&&"text-align: center;"},function(e){return e.right&&"text-align: right;"});s.propTypes={children:n.a.node.isRequired};var l=i.a.span.withConfig({displayName:"Typography__Footnote",componentId:"j4jyvl-2"})(["display:inline-block;color:var(--color-black);margin-bottom:1rem;opacity:0.25;transition:opacity 250ms;&:hover{opacity:1.0;}"]);l.propTypes={children:n.a.node.isRequired},a.d(t,"c",function(){return o}),a.d(t,"b",function(){return s}),a.d(t,"a",function(){return l})},180:function(e,t,a){"use strict";var i=a(2),r=i.a.ul.withConfig({displayName:"List",componentId:"sc-1dv6t0y-0"})(["list-style-type:none;margin:0;padding:0;"]),n=i.a.li.withConfig({displayName:"ListItem",componentId:"j74xju-0"})(["margin-bottom:1rem;"]);a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n})},186:function(e,t,a){"use strict";var i=a(13);t.__esModule=!0,t.default=void 0;var r,n=i(a(10)),o=i(a(45)),s=i(a(107)),l=i(a(108)),d=i(a(0)),c=i(a(1)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,m=g&&window.IntersectionObserver,y=new WeakMap;var b=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},S=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+l+a+r+t+o+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},f,{onLoad:o,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});v.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var w=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!h&&m&&!t.critical&&!a.seenBefore;var i=t.critical||g&&(h||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=b(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,m=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,w=e.itemProp,C=e.loading,E=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:E?1:0,transition:I?"opacity "+y+"ms":"none"},s),R="boolean"==typeof m?"lightgray":m,O={transitionDelay:y+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&O,s,f),T={title:t,alt:this.state.isVisible?"":a,style:N,className:p};if(h){var j=h;return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),R&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&O)}),j.base64&&d.default.createElement(v,(0,l.default)({src:j.base64},T)),j.tracedSVG&&d.default.createElement(v,(0,l.default)({src:j.tracedSVG},T)),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement(v,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,l.default)({alt:a,title:t,loading:C},j))}}))}if(g){var z=g,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete x.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},R&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:R,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},I&&O)}),z.base64&&d.default.createElement(v,(0,l.default)({src:z.base64},T)),z.tracedSVG&&d.default.createElement(v,(0,l.default)({src:z.tracedSVG},T)),this.state.isVisible&&d.default.createElement("picture",null,z.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),d.default.createElement(v,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,l.default)({alt:a,title:t,loading:C},z))}}))}return null},t}(d.default.Component);w.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});w.propTypes={resolutions:C,sizes:E,fixed:C,fluid:E,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var I=w;t.default=I}}]);
//# sourceMappingURL=component---src-pages-index-js-95b32020f53210b3f465.js.map