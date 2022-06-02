(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9605],{20240:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return c}});var n=a(22122),i=a(19756),o=(a(15007),a(64983)),r=a(99536),p=["components"],s={},m={_frontmatter:s},d=r.Z;function c(e){var t=e.components,a=(0,i.Z)(e,p);return(0,o.mdx)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"create-and-upload-adobe-io-certificate-keystore-to-aem-64x"},"Create and Upload Adobe I/O Certificate Keystore to AEM 6.4.x"),(0,o.mdx)("p",null,"To secure the calls between Adobe I/O and AEM, we leverage an oAuth JWT exchange token flow.\nThis flow uses a certificate to sign the JWT request and therefore requires certificates configurations\non both ends."),(0,o.mdx)("p",null,"In order to achieve the above, this documentation will described how you can:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"create a public/private certificate key and an associated keystore"),(0,o.mdx)("li",{parentName:"ul"},"add this keystore into the AEM ",(0,o.mdx)("inlineCode",{parentName:"li"},"eventproxy-service")," user","’","s keystores vault.")),(0,o.mdx)("h2",{id:"create-a-certificate-and-keystore"},"Create a certificate and keystore"),(0,o.mdx)("p",null,"To create a certificate and keystore:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Create an RSA private/public certificate in OpenSSL with the following command:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},"openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt\n"))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Add the private key and signed certificate to a PKCS#12 file with the following command:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},'openssl pkcs12 -keypbe PBE-SHA1-3DES -certpbe PBE-SHA1-3DES -export -in certificate_pub.crt -inkey private.key -out author.pfx -name "author"\n'))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"When prompted, create an export password and store it for later use.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Create a keystore from the generated keys with the following command:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},"cat private.key certificate_pub.crt > private-key-crt\n")),(0,o.mdx)("blockquote",{parentName:"li"},(0,o.mdx)("p",{parentName:"blockquote"},"Note: On Windows systems, you may need to concatenate the files manually or provide an alternate command. For more information, see the ",(0,o.mdx)("a",{parentName:"p",href:"https://www.openssl.org/docs/manpages.html"},"OpenSSL manpages"),"."))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Set the alias as ",(0,o.mdx)("strong",{parentName:"p"},"eventproxy")," and a non-empty keystore password (such as admin), with the following command:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},"openssl pkcs12 -export -in private-key-crt -out keystore.p12 -name eventproxy -noiter -nomaciter\n")),(0,o.mdx)("blockquote",{parentName:"li"},(0,o.mdx)("p",{parentName:"blockquote"},"Note: On Windows systems, this command expression may vary. For more information, see the ",(0,o.mdx)("a",{parentName:"p",href:"https://www.openssl.org/docs/manpages.html"},"OpenSSL manpages"),".")))),(0,o.mdx)("h2",{id:"add-the-certificate-into-the-aem-eventproxy-service-users-keystore"},"Add the certificate into the AEM ",(0,o.mdx)("inlineCode",{parentName:"h2"},"eventproxy-service")," user","’","s keystore"),(0,o.mdx)("p",null,"To add the certificate into the AEM ",(0,o.mdx)("inlineCode",{parentName:"p"},"eventproxy-service")," user","’","s keystore:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"In AEM, open the ",(0,o.mdx)("strong",{parentName:"p"},"User Management")," group by selecting the ",(0,o.mdx)("strong",{parentName:"p"},"Tools")," icon and then selecting ",(0,o.mdx)("strong",{parentName:"p"},"Security")," and ",(0,o.mdx)("strong",{parentName:"p"},"Users.")),(0,o.mdx)("p",{parentName:"li"},"  ",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"900px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/e1bddf0d556ceea616dbd1e62089c19e/cb523/events_aem_07.webp 320w","/adobe-io-events/static/e1bddf0d556ceea616dbd1e62089c19e/797b9/events_aem_07.webp 640w","/adobe-io-events/static/e1bddf0d556ceea616dbd1e62089c19e/90807/events_aem_07.webp 900w"],sizes:"(max-width: 900px) 100vw, 900px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/e1bddf0d556ceea616dbd1e62089c19e/72799/events_aem_07.png 320w","/adobe-io-events/static/e1bddf0d556ceea616dbd1e62089c19e/6af66/events_aem_07.png 640w","/adobe-io-events/static/e1bddf0d556ceea616dbd1e62089c19e/1cfc2/events_aem_07.png 900w"],sizes:"(max-width: 900px) 100vw, 900px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/e1bddf0d556ceea616dbd1e62089c19e/1cfc2/events_aem_07.png",alt:"User management navigation",title:"User management navigation",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Scroll down and Select ",(0,o.mdx)("strong",{parentName:"p"},"eventproxy-service")," to open it."),(0,o.mdx)("p",{parentName:"li"},"  ",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"900px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/a85b50604a039e2ca7410a797e955180/cb523/events_aem_08.webp 320w","/adobe-io-events/static/a85b50604a039e2ca7410a797e955180/797b9/events_aem_08.webp 640w","/adobe-io-events/static/a85b50604a039e2ca7410a797e955180/90807/events_aem_08.webp 900w"],sizes:"(max-width: 900px) 100vw, 900px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/a85b50604a039e2ca7410a797e955180/72799/events_aem_08.png 320w","/adobe-io-events/static/a85b50604a039e2ca7410a797e955180/6af66/events_aem_08.png 640w","/adobe-io-events/static/a85b50604a039e2ca7410a797e955180/1cfc2/events_aem_08.png 900w"],sizes:"(max-width: 900px) 100vw, 900px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/a85b50604a039e2ca7410a797e955180/1cfc2/events_aem_08.png",alt:"Selecting the eventproxy service",title:"Selecting the eventproxy service",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Select ",(0,o.mdx)("strong",{parentName:"p"},"Create KeyStore"))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Select ",(0,o.mdx)("strong",{parentName:"p"},"Manage KeyStore")," and then expand the section for ",(0,o.mdx)("strong",{parentName:"p"},"Add Private Key from Key Store file."))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Add the keystore.p12 file by setting the key pair alias to ",(0,o.mdx)("strong",{parentName:"p"},"eventproxy")," or the alias specified previously.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Provide the keystore password (the same one provided when generating the key store).")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Provide the private key password and then provide the private key alias ",(0,o.mdx)("strong",{parentName:"p"},"eventproxy"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Select ",(0,o.mdx)("strong",{parentName:"p"},"Submit"),"."),(0,o.mdx)("p",{parentName:"li"},"  ",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"795px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/3d92d6bdf361cbf46fb74d75833d4eea/cb523/events_aem_10.webp 320w","/adobe-io-events/static/3d92d6bdf361cbf46fb74d75833d4eea/797b9/events_aem_10.webp 640w","/adobe-io-events/static/3d92d6bdf361cbf46fb74d75833d4eea/55cb6/events_aem_10.webp 795w"],sizes:"(max-width: 795px) 100vw, 795px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/3d92d6bdf361cbf46fb74d75833d4eea/72799/events_aem_10.png 320w","/adobe-io-events/static/3d92d6bdf361cbf46fb74d75833d4eea/6af66/events_aem_10.png 640w","/adobe-io-events/static/3d92d6bdf361cbf46fb74d75833d4eea/65c7b/events_aem_10.png 795w"],sizes:"(max-width: 795px) 100vw, 795px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/3d92d6bdf361cbf46fb74d75833d4eea/65c7b/events_aem_10.png",alt:"keystore management",title:"keystore management",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Click ",(0,o.mdx)("strong",{parentName:"p"},"Save and Close"),"  on the top right corner of the screen"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-aem-deprecated-aem-keystore-setup-6-4-md-7dd592997a07c0331125.js.map