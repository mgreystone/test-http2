System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  depCache: {
    "main.js": [
      "react",
      "react-dom"
    ],
    "npm:react@0.14.8.js": [
      "npm:react@0.14.8/react.js"
    ],
    "npm:react-dom@0.14.8.js": [
      "npm:react-dom@0.14.8/index.js"
    ],
    "npm:react@0.14.8/react.js": [
      "./lib/React"
    ],
    "npm:react-dom@0.14.8/index.js": [
      "react/lib/ReactDOM"
    ],
    "npm:react@0.14.8/lib/React.js": [
      "./ReactDOM",
      "./ReactDOMServer",
      "./ReactIsomorphic",
      "./Object.assign",
      "./deprecated"
    ],
    "npm:react@0.14.8/lib/ReactDOM.js": [
      "./ReactCurrentOwner",
      "./ReactDOMTextComponent",
      "./ReactDefaultInjection",
      "./ReactInstanceHandles",
      "./ReactMount",
      "./ReactPerf",
      "./ReactReconciler",
      "./ReactUpdates",
      "./ReactVersion",
      "./findDOMNode",
      "./renderSubtreeIntoContainer",
      "fbjs/lib/warning",
      "fbjs/lib/ExecutionEnvironment",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMServer.js": [
      "./ReactDefaultInjection",
      "./ReactServerRendering",
      "./ReactVersion"
    ],
    "npm:react@0.14.8/lib/ReactIsomorphic.js": [
      "./ReactChildren",
      "./ReactComponent",
      "./ReactClass",
      "./ReactDOMFactories",
      "./ReactElement",
      "./ReactElementValidator",
      "./ReactPropTypes",
      "./ReactVersion",
      "./Object.assign",
      "./onlyChild",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactReconciler.js": [
      "./ReactRef"
    ],
    "npm:react@0.14.8/lib/ReactDOMTextComponent.js": [
      "./DOMChildrenOperations",
      "./DOMPropertyOperations",
      "./ReactComponentBrowserEnvironment",
      "./ReactMount",
      "./Object.assign",
      "./escapeTextContentForBrowser",
      "./setTextContent",
      "./validateDOMNesting",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactPerf.js": [
      "process"
    ],
    "npm:react@0.14.8/lib/deprecated.js": [
      "./Object.assign",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDefaultInjection.js": [
      "./BeforeInputEventPlugin",
      "./ChangeEventPlugin",
      "./ClientReactRootIndex",
      "./DefaultEventPluginOrder",
      "./EnterLeaveEventPlugin",
      "fbjs/lib/ExecutionEnvironment",
      "./HTMLDOMPropertyConfig",
      "./ReactBrowserComponentMixin",
      "./ReactComponentBrowserEnvironment",
      "./ReactDefaultBatchingStrategy",
      "./ReactDOMComponent",
      "./ReactDOMTextComponent",
      "./ReactEventListener",
      "./ReactInjection",
      "./ReactInstanceHandles",
      "./ReactMount",
      "./ReactReconcileTransaction",
      "./SelectEventPlugin",
      "./ServerReactRootIndex",
      "./SimpleEventPlugin",
      "./SVGDOMPropertyConfig",
      "./ReactDefaultPerf",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactInstanceHandles.js": [
      "./ReactRootIndex",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactMount.js": [
      "./DOMProperty",
      "./ReactBrowserEventEmitter",
      "./ReactCurrentOwner",
      "./ReactDOMFeatureFlags",
      "./ReactElement",
      "./ReactEmptyComponentRegistry",
      "./ReactInstanceHandles",
      "./ReactInstanceMap",
      "./ReactMarkupChecksum",
      "./ReactPerf",
      "./ReactReconciler",
      "./ReactUpdateQueue",
      "./ReactUpdates",
      "./Object.assign",
      "fbjs/lib/emptyObject",
      "fbjs/lib/containsNode",
      "./instantiateReactComponent",
      "fbjs/lib/invariant",
      "./setInnerHTML",
      "./shouldUpdateReactComponent",
      "./validateDOMNesting",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/renderSubtreeIntoContainer.js": [
      "./ReactMount"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:fbjs@0.6.1/lib/warning.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactUpdates.js": [
      "./CallbackQueue",
      "./PooledClass",
      "./ReactPerf",
      "./ReactReconciler",
      "./Transaction",
      "./Object.assign",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/findDOMNode.js": [
      "./ReactCurrentOwner",
      "./ReactInstanceMap",
      "./ReactMount",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactElement.js": [
      "./ReactCurrentOwner",
      "./Object.assign",
      "./canDefineProperty",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactChildren.js": [
      "./PooledClass",
      "./ReactElement",
      "fbjs/lib/emptyFunction",
      "./traverseAllChildren"
    ],
    "npm:react@0.14.8/lib/ReactServerRendering.js": [
      "./ReactDefaultBatchingStrategy",
      "./ReactElement",
      "./ReactInstanceHandles",
      "./ReactMarkupChecksum",
      "./ReactServerBatchingStrategy",
      "./ReactServerRenderingTransaction",
      "./ReactUpdates",
      "fbjs/lib/emptyObject",
      "./instantiateReactComponent",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMFactories.js": [
      "./ReactElement",
      "./ReactElementValidator",
      "fbjs/lib/mapObject",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactComponent.js": [
      "./ReactNoopUpdateQueue",
      "./canDefineProperty",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactClass.js": [
      "./ReactComponent",
      "./ReactElement",
      "./ReactPropTypeLocations",
      "./ReactPropTypeLocationNames",
      "./ReactNoopUpdateQueue",
      "./Object.assign",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/keyMirror",
      "fbjs/lib/keyOf",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactElementValidator.js": [
      "./ReactElement",
      "./ReactPropTypeLocations",
      "./ReactPropTypeLocationNames",
      "./ReactCurrentOwner",
      "./canDefineProperty",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactPropTypes.js": [
      "./ReactElement",
      "./ReactPropTypeLocationNames",
      "fbjs/lib/emptyFunction",
      "./getIteratorFn"
    ],
    "npm:react@0.14.8/lib/onlyChild.js": [
      "./ReactElement",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactInjection.js": [
      "./DOMProperty",
      "./EventPluginHub",
      "./ReactComponentEnvironment",
      "./ReactClass",
      "./ReactEmptyComponent",
      "./ReactBrowserEventEmitter",
      "./ReactNativeComponent",
      "./ReactPerf",
      "./ReactRootIndex",
      "./ReactUpdates"
    ],
    "npm:react@0.14.8/lib/ReactReconcileTransaction.js": [
      "./CallbackQueue",
      "./PooledClass",
      "./ReactBrowserEventEmitter",
      "./ReactDOMFeatureFlags",
      "./ReactInputSelection",
      "./Transaction",
      "./Object.assign"
    ],
    "npm:react@0.14.8/lib/SVGDOMPropertyConfig.js": [
      "./DOMProperty"
    ],
    "npm:react@0.14.8/lib/ReactMarkupChecksum.js": [
      "./adler32"
    ],
    "npm:fbjs@0.6.1/lib/containsNode.js": [
      "./isTextNode"
    ],
    "npm:react@0.14.8/lib/ReactRef.js": [
      "./ReactOwner",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactComponentBrowserEnvironment.js": [
      "./ReactDOMIDOperations",
      "./ReactMount",
      "process"
    ],
    "npm:fbjs@0.6.1/lib/invariant.js": [
      "process"
    ],
    "npm:react@0.14.8/lib/ReactBrowserEventEmitter.js": [
      "./EventConstants",
      "./EventPluginHub",
      "./EventPluginRegistry",
      "./ReactEventEmitterMixin",
      "./ReactPerf",
      "./ViewportMetrics",
      "./Object.assign",
      "./isEventSupported",
      "process"
    ],
    "npm:fbjs@0.6.1/lib/emptyObject.js": [
      "process"
    ],
    "npm:react@0.14.8/lib/DOMChildrenOperations.js": [
      "./Danger",
      "./ReactMultiChildUpdateTypes",
      "./ReactPerf",
      "./setInnerHTML",
      "./setTextContent",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/DOMPropertyOperations.js": [
      "./DOMProperty",
      "./ReactPerf",
      "./quoteAttributeValueForBrowser",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/setTextContent.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./escapeTextContentForBrowser",
      "./setInnerHTML"
    ],
    "npm:react@0.14.8/lib/validateDOMNesting.js": [
      "./Object.assign",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/BeforeInputEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./FallbackCompositionState",
      "./SyntheticCompositionEvent",
      "./SyntheticInputEvent",
      "fbjs/lib/keyOf"
    ],
    "npm:react@0.14.8/lib/ChangeEventPlugin.js": [
      "./EventConstants",
      "./EventPluginHub",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactUpdates",
      "./SyntheticEvent",
      "./getEventTarget",
      "./isEventSupported",
      "./isTextInputElement",
      "fbjs/lib/keyOf",
      "process"
    ],
    "npm:react@0.14.8/lib/DefaultEventPluginOrder.js": [
      "fbjs/lib/keyOf"
    ],
    "npm:react@0.14.8/lib/EnterLeaveEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "./SyntheticMouseEvent",
      "./ReactMount",
      "fbjs/lib/keyOf"
    ],
    "npm:react@0.14.8/lib/HTMLDOMPropertyConfig.js": [
      "./DOMProperty",
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@0.14.8/lib/ReactBrowserComponentMixin.js": [
      "./ReactInstanceMap",
      "./findDOMNode",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDefaultBatchingStrategy.js": [
      "./ReactUpdates",
      "./Transaction",
      "./Object.assign",
      "fbjs/lib/emptyFunction"
    ],
    "npm:react@0.14.8/lib/ReactEventListener.js": [
      "fbjs/lib/EventListener",
      "fbjs/lib/ExecutionEnvironment",
      "./PooledClass",
      "./ReactInstanceHandles",
      "./ReactMount",
      "./ReactUpdates",
      "./Object.assign",
      "./getEventTarget",
      "fbjs/lib/getUnboundedScrollPosition",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMComponent.js": [
      "./AutoFocusUtils",
      "./CSSPropertyOperations",
      "./DOMProperty",
      "./DOMPropertyOperations",
      "./EventConstants",
      "./ReactBrowserEventEmitter",
      "./ReactComponentBrowserEnvironment",
      "./ReactDOMButton",
      "./ReactDOMInput",
      "./ReactDOMOption",
      "./ReactDOMSelect",
      "./ReactDOMTextarea",
      "./ReactMount",
      "./ReactMultiChild",
      "./ReactPerf",
      "./ReactUpdateQueue",
      "./Object.assign",
      "./canDefineProperty",
      "./escapeTextContentForBrowser",
      "fbjs/lib/invariant",
      "./isEventSupported",
      "fbjs/lib/keyOf",
      "./setInnerHTML",
      "./setTextContent",
      "fbjs/lib/shallowEqual",
      "./validateDOMNesting",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/SelectEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactInputSelection",
      "./SyntheticEvent",
      "fbjs/lib/getActiveElement",
      "./isTextInputElement",
      "fbjs/lib/keyOf",
      "fbjs/lib/shallowEqual"
    ],
    "npm:react@0.14.8/lib/SimpleEventPlugin.js": [
      "./EventConstants",
      "fbjs/lib/EventListener",
      "./EventPropagators",
      "./ReactMount",
      "./SyntheticClipboardEvent",
      "./SyntheticEvent",
      "./SyntheticFocusEvent",
      "./SyntheticKeyboardEvent",
      "./SyntheticMouseEvent",
      "./SyntheticDragEvent",
      "./SyntheticTouchEvent",
      "./SyntheticUIEvent",
      "./SyntheticWheelEvent",
      "fbjs/lib/emptyFunction",
      "./getEventCharCode",
      "fbjs/lib/invariant",
      "fbjs/lib/keyOf",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDefaultPerf.js": [
      "./DOMProperty",
      "./ReactDefaultPerfAnalysis",
      "./ReactMount",
      "./ReactPerf",
      "fbjs/lib/performanceNow"
    ],
    "npm:react@0.14.8/lib/DOMProperty.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactUpdateQueue.js": [
      "./ReactCurrentOwner",
      "./ReactElement",
      "./ReactInstanceMap",
      "./ReactUpdates",
      "./Object.assign",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/instantiateReactComponent.js": [
      "./ReactCompositeComponent",
      "./ReactEmptyComponent",
      "./ReactNativeComponent",
      "./Object.assign",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/setInnerHTML.js": [
      "fbjs/lib/ExecutionEnvironment",
      "process"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "process"
    ],
    "npm:react@0.14.8/lib/PooledClass.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/CallbackQueue.js": [
      "./PooledClass",
      "./Object.assign",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/Transaction.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/canDefineProperty.js": [
      "process"
    ],
    "npm:fbjs@0.6.1/lib/keyMirror.js": [
      "./invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactPropTypeLocationNames.js": [
      "process"
    ],
    "npm:react@0.14.8/lib/traverseAllChildren.js": [
      "./ReactCurrentOwner",
      "./ReactElement",
      "./ReactInstanceHandles",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactServerRenderingTransaction.js": [
      "./PooledClass",
      "./CallbackQueue",
      "./Transaction",
      "./Object.assign",
      "fbjs/lib/emptyFunction"
    ],
    "npm:react@0.14.8/lib/ReactNoopUpdateQueue.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactPropTypeLocations.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:react@0.14.8/lib/ReactEmptyComponent.js": [
      "./ReactElement",
      "./ReactEmptyComponentRegistry",
      "./ReactReconciler",
      "./Object.assign"
    ],
    "npm:fbjs@0.6.1/lib/isTextNode.js": [
      "./isNode"
    ],
    "npm:react@0.14.8/lib/ReactEventEmitterMixin.js": [
      "./EventPluginHub"
    ],
    "npm:react@0.14.8/lib/quoteAttributeValueForBrowser.js": [
      "./escapeTextContentForBrowser"
    ],
    "npm:react@0.14.8/lib/SyntheticInputEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@0.14.8/lib/SyntheticCompositionEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@0.14.8/lib/FallbackCompositionState.js": [
      "./PooledClass",
      "./Object.assign",
      "./getTextContentAccessor"
    ],
    "npm:react@0.14.8/lib/SyntheticMouseEvent.js": [
      "./SyntheticUIEvent",
      "./ViewportMetrics",
      "./getEventModifierState"
    ],
    "npm:react@0.14.8/lib/SyntheticClipboardEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@0.14.8/lib/SyntheticKeyboardEvent.js": [
      "./SyntheticUIEvent",
      "./getEventCharCode",
      "./getEventKey",
      "./getEventModifierState"
    ],
    "npm:react@0.14.8/lib/SyntheticFocusEvent.js": [
      "./SyntheticUIEvent"
    ],
    "npm:react@0.14.8/lib/SyntheticDragEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:react@0.14.8/lib/SyntheticTouchEvent.js": [
      "./SyntheticUIEvent",
      "./getEventModifierState"
    ],
    "npm:react@0.14.8/lib/SyntheticUIEvent.js": [
      "./SyntheticEvent",
      "./getEventTarget"
    ],
    "npm:react@0.14.8/lib/SyntheticWheelEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:react@0.14.8/lib/ReactDefaultPerfAnalysis.js": [
      "./Object.assign"
    ],
    "npm:fbjs@0.6.1/lib/performanceNow.js": [
      "./performance"
    ],
    "npm:fbjs@0.6.1/lib/EventListener.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactMultiChild.js": [
      "./ReactComponentEnvironment",
      "./ReactMultiChildUpdateTypes",
      "./ReactCurrentOwner",
      "./ReactReconciler",
      "./ReactChildReconciler",
      "./flattenChildren",
      "process"
    ],
    "npm:react@0.14.8/lib/EventPluginHub.js": [
      "./EventPluginRegistry",
      "./EventPluginUtils",
      "./ReactErrorUtils",
      "./accumulateInto",
      "./forEachAccumulated",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactComponentEnvironment.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactNativeComponent.js": [
      "./Object.assign",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactInputSelection.js": [
      "./ReactDOMSelection",
      "fbjs/lib/containsNode",
      "fbjs/lib/focusNode",
      "fbjs/lib/getActiveElement"
    ],
    "npm:react@0.14.8/lib/ReactOwner.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMIDOperations.js": [
      "./DOMChildrenOperations",
      "./DOMPropertyOperations",
      "./ReactMount",
      "./ReactPerf",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/EventConstants.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:react@0.14.8/lib/EventPluginRegistry.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/isEventSupported.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@0.14.8/lib/Danger.js": [
      "fbjs/lib/ExecutionEnvironment",
      "fbjs/lib/createNodesFromMarkup",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/getMarkupWrap",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactMultiChildUpdateTypes.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:react@0.14.8/lib/EventPropagators.js": [
      "./EventConstants",
      "./EventPluginHub",
      "fbjs/lib/warning",
      "./accumulateInto",
      "./forEachAccumulated",
      "process"
    ],
    "npm:react@0.14.8/lib/SyntheticEvent.js": [
      "./PooledClass",
      "./Object.assign",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/AutoFocusUtils.js": [
      "./ReactMount",
      "./findDOMNode",
      "fbjs/lib/focusNode"
    ],
    "npm:react@0.14.8/lib/CSSPropertyOperations.js": [
      "./CSSProperty",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactPerf",
      "fbjs/lib/camelizeStyleName",
      "./dangerousStyleValue",
      "fbjs/lib/hyphenateStyleName",
      "fbjs/lib/memoizeStringOnly",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMInput.js": [
      "./ReactDOMIDOperations",
      "./LinkedValueUtils",
      "./ReactMount",
      "./ReactUpdates",
      "./Object.assign",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMOption.js": [
      "./ReactChildren",
      "./ReactDOMSelect",
      "./Object.assign",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMSelect.js": [
      "./LinkedValueUtils",
      "./ReactMount",
      "./ReactUpdates",
      "./Object.assign",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMTextarea.js": [
      "./LinkedValueUtils",
      "./ReactDOMIDOperations",
      "./ReactUpdates",
      "./Object.assign",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactCompositeComponent.js": [
      "./ReactComponentEnvironment",
      "./ReactCurrentOwner",
      "./ReactElement",
      "./ReactInstanceMap",
      "./ReactPerf",
      "./ReactPropTypeLocations",
      "./ReactPropTypeLocationNames",
      "./ReactReconciler",
      "./ReactUpdateQueue",
      "./Object.assign",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "./shouldUpdateReactComponent",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:process@0.11.2.js": [
      "npm:process@0.11.2/browser.js"
    ],
    "npm:fbjs@0.6.1/lib/performance.js": [
      "./ExecutionEnvironment"
    ],
    "npm:react@0.14.8/lib/getEventKey.js": [
      "./getEventCharCode"
    ],
    "npm:fbjs@0.6.1/lib/camelizeStyleName.js": [
      "./camelize"
    ],
    "npm:react@0.14.8/lib/dangerousStyleValue.js": [
      "./CSSProperty"
    ],
    "npm:fbjs@0.6.1/lib/hyphenateStyleName.js": [
      "./hyphenate"
    ],
    "npm:react@0.14.8/lib/ReactErrorUtils.js": [
      "process"
    ],
    "npm:fbjs@0.6.1/lib/getMarkupWrap.js": [
      "./ExecutionEnvironment",
      "./invariant",
      "process"
    ],
    "npm:fbjs@0.6.1/lib/createNodesFromMarkup.js": [
      "./ExecutionEnvironment",
      "./createArrayFromMixed",
      "./getMarkupWrap",
      "./invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/getTextContentAccessor.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@0.14.8/lib/ReactChildReconciler.js": [
      "./ReactReconciler",
      "./instantiateReactComponent",
      "./shouldUpdateReactComponent",
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/flattenChildren.js": [
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/EventPluginUtils.js": [
      "./EventConstants",
      "./ReactErrorUtils",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/accumulateInto.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMSelection.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./getNodeForCharacterOffset",
      "./getTextContentAccessor"
    ],
    "npm:react@0.14.8/lib/LinkedValueUtils.js": [
      "./ReactPropTypes",
      "./ReactPropTypeLocations",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:fbjs@0.6.1/lib/createArrayFromMixed.js": [
      "./toArray"
    ],
    "npm:fbjs@0.6.1/lib/toArray.js": [
      "./invariant",
      "process"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.6",
    "jspm-loader-jsx": "npm:jspm-loader-jsx@0.0.7",
    "react": "npm:react@0.14.8",
    "react-dom": "npm:react-dom@0.14.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:camel-case@1.2.2": {
      "sentence-case": "npm:sentence-case@1.1.3",
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jspm-loader-jsx@0.0.7": {
      "pascal-case": "npm:pascal-case@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "react": "npm:react@0.13.3",
      "react-hot-api": "github:gaearon/react-hot-api@0.4.5"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:pascal-case@1.1.2": {
      "camel-case": "npm:camel-case@1.2.2",
      "upper-case-first": "npm:upper-case-first@1.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:react-dom@0.14.8": {
      "react": "npm:react@0.14.8"
    },
    "npm:react@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@0.14.8": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:sentence-case@1.1.3": {
      "lower-case": "npm:lower-case@1.1.3"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:upper-case-first@1.1.2": {
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
