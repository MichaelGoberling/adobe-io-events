(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3821],{53981:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return d},default:function(){return l}});var i=t(22122),n=t(19756),o=(t(15007),t(64983)),s=t(99536),r=["components"],d={},c={_frontmatter:d},p=s.Z;function l(e){var a=e.components,t=(0,n.Z)(e,r);return(0,o.mdx)(p,(0,i.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"runtime-actions-as-webhook"},"Runtime Actions as Webhook"),(0,o.mdx)("p",null,"The integration between Adobe I/O Runtime and I/O Events lets you create Runtime actions to be set up as webhook endpoints on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Developer Console")," for receiving events, so that every time an event fires, your Runtime action is executed. We recommend setting up your runtime action as webhook if you have short-running action (that responds within 10 sec)."),(0,o.mdx)("p",null,"For long-running (async) actions and guaranteed event handling you should consider using the ",(0,o.mdx)("a",{parentName:"p",href:"/adobe-io-events/app-builder/docs/resources/journaling-events/"},"journaling approach")," for consuming events."),(0,o.mdx)("h2",{id:"setting-up-webhook-integration-with-runtime-action"},"Setting up Webhook Integration with Runtime Action"),(0,o.mdx)("p",null,"The Runtime cli will let you create a runtime action and hook it up with an integration via Adobe Developer Console. Read ",(0,o.mdx)("a",{parentName:"p",href:"/adobe-io-events/runtime/docs/guides/getting-started/setup/"},"here")," to setup your cli with Runtime plugin which is required as pre-requisite."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Go to Developer Console and start creating an event registration"),(0,o.mdx)("li",{parentName:"ul"},"Add ",(0,o.mdx)("a",{parentName:"li",href:"/adobe-io-events/developer-console/docs/guides/services/#enable-runtime"},"Runtime")," to your project, this will create the required auth and runtime namespace for you."),(0,o.mdx)("li",{parentName:"ul"},"Go to ",(0,o.mdx)("inlineCode",{parentName:"li"},"aio-cli")," and create and deploy your user-action in your namespace. "),(0,o.mdx)("li",{parentName:"ul"},"Come back to Developer Console and you will see the deployed runtime action in your namespace under the ",(0,o.mdx)("inlineCode",{parentName:"li"},"User Defined Actions")," section. Refresh the page if you don't see the action."),(0,o.mdx)("li",{parentName:"ul"},"Now set up an event registration using the runtime action you just deployed. You would need to select the ",(0,o.mdx)("inlineCode",{parentName:"li"},"Runtime Action")," option in your ",(0,o.mdx)("inlineCode",{parentName:"li"},"Configure event registration")," page. Choose your runtime action from the dropdown and click ",(0,o.mdx)("inlineCode",{parentName:"li"},"Save configured events"),"."),(0,o.mdx)("li",{parentName:"ul"},"This will create an event registration with an event handler webhook pointing to your runtime action. ")),(0,o.mdx)("h2",{id:"benefits-of-using-runtime-action-as-webhook"},"Benefits of using Runtime Action as Webhook"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#built-in-signature-verification"},"Built In Signature Verification")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#tracing-actions-with-activation-ids"},"Tracing Actions with Activation Ids"))),(0,o.mdx)("h3",{id:"built-in-signature-verification"},"Built In Signature Verification"),(0,o.mdx)("p",null,"With integration between I/O Events and Adobe I/O Runtime, you don't need to worry about security as your runtime actions configured as webhooks are secured with an out-of-the-box signature verification implementation. So, basically whatever runtime action you use to create an event registration, the handler webhook created due to that will place a signature validator action along with your action as in a ",(0,o.mdx)("a",{parentName:"p",href:"/adobe-io-events/runtime/docs/guides/reference/sequences_compositions/"},"sequence"),". I/O Events signs the event payload using digital signatures generated using its private keys and passes the signatures as well as its public keys as request headers while invoking your webhook. Your business logic runtime action will only be invoked once the validator action successfully verifies any one of the digital signatures using the public keys. You can read more about the digital signatures based authentication mechanism ",(0,o.mdx)("a",{parentName:"p",href:"/adobe-io-events/src/pages/guides/index.md#security-considerations"},"here"),"."),(0,o.mdx)("h3",{id:"tracing-actions-with-activation-ids"},"Tracing Actions with Activation Ids"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"../support/tracing.md"},"Debug Tracing")," is a pretty important tool on Developer Console for users who want to be informed whether their runtime action invocation is successful or not or what it responds."),(0,o.mdx)("p",null,"After setting up a runtime action as webhook, upon its successful invocation, you can see custom response returned from your own runtime action in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Debug Tracing")," webhook response section as below."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/4e0afe81b5b7052e846bdaf386775b39/cb523/debug_tracing_webhook_response_new.webp 320w","/adobe-io-events/static/4e0afe81b5b7052e846bdaf386775b39/797b9/debug_tracing_webhook_response_new.webp 640w","/adobe-io-events/static/4e0afe81b5b7052e846bdaf386775b39/4b075/debug_tracing_webhook_response_new.webp 1280w","/adobe-io-events/static/4e0afe81b5b7052e846bdaf386775b39/f3ff0/debug_tracing_webhook_response_new.webp 1920w","/adobe-io-events/static/4e0afe81b5b7052e846bdaf386775b39/20744/debug_tracing_webhook_response_new.webp 2476w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/4e0afe81b5b7052e846bdaf386775b39/72799/debug_tracing_webhook_response_new.png 320w","/adobe-io-events/static/4e0afe81b5b7052e846bdaf386775b39/6af66/debug_tracing_webhook_response_new.png 640w","/adobe-io-events/static/4e0afe81b5b7052e846bdaf386775b39/21b4d/debug_tracing_webhook_response_new.png 1280w","/adobe-io-events/static/4e0afe81b5b7052e846bdaf386775b39/29114/debug_tracing_webhook_response_new.png 1920w","/adobe-io-events/static/4e0afe81b5b7052e846bdaf386775b39/91a65/debug_tracing_webhook_response_new.png 2476w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/4e0afe81b5b7052e846bdaf386775b39/21b4d/debug_tracing_webhook_response_new.png",alt:"Debug Tracing Webhook Response New on Adobe Developer Console",title:"Debug Tracing Webhook Response New on Adobe Developer Console",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"However, in case of any failed invocation to your webhook, you will get an error response body with an activation id for the same. This helps users to debug their actions as below"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"This activation id you can use in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio cli")," to trace the actual error occurred in your invocation by doing ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio rt activation logs <failed_activation_id>"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"You may now get activation ids for two types of failed activations - "),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},"- Signature Validator Action \n- Your Runtime Action  \n"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"In case of failure in the signature verification step, this is how you will get the error response and the failed activation id for the same."),(0,o.mdx)("p",{parentName:"li"}," ",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1258px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/177a3fcd0dfad8718e5629ab812b4aa1/cb523/activation_id_for_failed_signature.webp 320w","/adobe-io-events/static/177a3fcd0dfad8718e5629ab812b4aa1/797b9/activation_id_for_failed_signature.webp 640w","/adobe-io-events/static/177a3fcd0dfad8718e5629ab812b4aa1/ab7d4/activation_id_for_failed_signature.webp 1258w"],sizes:"(max-width: 1258px) 100vw, 1258px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/177a3fcd0dfad8718e5629ab812b4aa1/72799/activation_id_for_failed_signature.png 320w","/adobe-io-events/static/177a3fcd0dfad8718e5629ab812b4aa1/6af66/activation_id_for_failed_signature.png 640w","/adobe-io-events/static/177a3fcd0dfad8718e5629ab812b4aa1/afa26/activation_id_for_failed_signature.png 1258w"],sizes:"(max-width: 1258px) 100vw, 1258px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/177a3fcd0dfad8718e5629ab812b4aa1/afa26/activation_id_for_failed_signature.png",alt:"Activation Id for Failed Signature Verification",title:"Activation Id for Failed Signature Verification",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"For failed invocation to your runtime action, you will get an error response with the failed activation id for the same like below"),(0,o.mdx)("p",{parentName:"li"}," ",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1262px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/eb53f4eba0625535cc7b9f3a60c3fc56/cb523/activation_id_for_failed_user_action.webp 320w","/adobe-io-events/static/eb53f4eba0625535cc7b9f3a60c3fc56/797b9/activation_id_for_failed_user_action.webp 640w","/adobe-io-events/static/eb53f4eba0625535cc7b9f3a60c3fc56/7408f/activation_id_for_failed_user_action.webp 1262w"],sizes:"(max-width: 1262px) 100vw, 1262px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/eb53f4eba0625535cc7b9f3a60c3fc56/72799/activation_id_for_failed_user_action.png 320w","/adobe-io-events/static/eb53f4eba0625535cc7b9f3a60c3fc56/6af66/activation_id_for_failed_user_action.png 640w","/adobe-io-events/static/eb53f4eba0625535cc7b9f3a60c3fc56/62da8/activation_id_for_failed_user_action.png 1262w"],sizes:"(max-width: 1262px) 100vw, 1262px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/eb53f4eba0625535cc7b9f3a60c3fc56/62da8/activation_id_for_failed_user_action.png",alt:"Activation Id for Failed User Action",title:"Activation Id for Failed User Action",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-runtime-webhooks-md-adff401a72614e8b2dc9.js.map