/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('SearchBinderIndex', function(Y, NAME) {

/**
 * The SearchBinderIndex module.
 *
 * @module SearchBinderIndex
 */

    /**
     * Constructor for the SearchBinderIndex class.
     *
     * @class SearchBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            var me = this;
            this.node = node;
            /*
            node.one("#submit-button").on("click", function(e) {
                console.log(node.one("input[name='key']").get("value"));
                //console.log(me.mojitProxy);
                me.mojitProxy.invoke("search", {
                    params : {
                        url : {
                            key : node.one("input[name='key']").get("value")
                        }
                    }
                }, function(error, markup) {
                    console.log(markup);

                    node.one("#search-result").set("innerHTML", markup);
                });
            });*/
            /**
             * Example code for the bind method:
             *
             * node.all('dt').on('mouseenter', function(evt) {
             *   var dd = '#dd_' + evt.target.get('text');
             *   me.node.one(dd).addClass('sel');
             *
             * });
             * node.all('dt').on('mouseleave', function(evt) {
             *   
             *   var dd = '#dd_' + evt.target.get('text');
             *   me.node.one(dd).removeClass('sel');
             *
             * });
             */
        }

    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client', 'io']});
