
/*
Code generated with Faust version 2.6.1
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONCombFilter() {
	return "{\"name\":\"Comb Filter\",\"filename\":\"CombFilter\",\"version\":\"2.6.1\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"524348\",\"inputs\":\"1\",\"outputs\":\"1\",\"meta\":[{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"filename\":\"CombFilter\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Comb Filter\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Comb Filter\",\"items\":[{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Comb_Filter/Frequency\",\"index\":\"524312\",\"meta\":[{\"acc\":\"0 1 -10 0 10\"}],\"init\":\"2500\",\"min\":\"100\",\"max\":\"20000\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Intensity\",\"address\":\"/Comb_Filter/Intensity\",\"index\":\"0\",\"meta\":[{\"acc\":\"1 0 -10 0 10\"}],\"init\":\"80\",\"min\":\"0\",\"max\":\"100\",\"step\":\"0.01\"}]}]}";
}
function getBase64CodeCombFilter() { return "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b24iOiIwLjAifSx7ImZpbGVuYW1lIjoiQ29tYkZpbHRlciJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiQ29tYiBGaWx0ZXIifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiQ29tYiBGaWx0ZXIiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvQ29tYl9GaWx0ZXIvRnJlcXVlbmN5IiwiaW5kZXgiOiI1MjQzMTIiLCJtZXRhIjpbeyJhY2MiOiIwIDEgLTEwIDAgMTAifV0sImluaXQiOiIyNTAwIiwibWluIjoiMTAwIiwibWF4IjoiMjAwMDAiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJJbnRlbnNpdHkiLCJhZGRyZXNzIjoiL0NvbWJfRmlsdGVyL0ludGVuc2l0eSIsImluZGV4IjoiMCIsIm1ldGEiOlt7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9XSwiaW5pdCI6IjgwIiwibWluIjoiMCIsIm1heCI6IjEwMCIsInN0ZXAiOiIwLjAxIn1dfV19MA=="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class CombFilterProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            CombFilterProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            CombFilterProcessor.parse_items(group.items, obj, callback);
        }
    }
    
    static parse_items(items, obj, callback)
    {
        for (var i = 0; i < items.length; i++) {
            callback(items[i], obj, callback);
        }
    }
    
    static parse_item1(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            CombFilterProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Nothing
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            obj.push({ name: item.address,
                     defaultValue: item.init,
                     minValue: item.min,
                     maxValue: item.max });
        }
    }
    
    static parse_item2(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            CombFilterProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            // Keep inputs adresses
            obj.inputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        }
    }
    
    static b64ToUint6(nChr)
    {
        return nChr > 64 && nChr < 91 ?
        nChr - 65
        : nChr > 96 && nChr < 123 ?
        nChr - 71
        : nChr > 47 && nChr < 58 ?
        nChr + 4
        : nChr === 43 ?
        62
        : nChr === 47 ?
        63
        :
        0;
    }
    
    static atob(sBase64, nBlocksSize)
    {
        if (typeof atob === 'function') {
            return atob(sBase64);
        } else {
            
            var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, "");
            var nInLen = sB64Enc.length;
            var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
            var taBytes = new Uint8Array(nOutLen);
            
            for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                nMod4 = nInIdx & 3;
                nUint24 |= CombFilterProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                if (nMod4 === 3 || nInLen - nInIdx === 1) {
                    for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                    }
                    nUint24 = 0;
                }
            }
            return taBytes.buffer;
        }
    }
   
    static get parameterDescriptors () 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        CombFilterProcessor.parse_ui(JSON.parse(getJSONCombFilter()).ui, params, CombFilterProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONCombFilter());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.CombFilter_instance = new WebAssembly.Instance(CombFilterProcessor.wasm_module, CombFilterProcessor.importObject);
  	   	this.factory = this.CombFilter_instance.exports;
        this.HEAP = this.CombFilter_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        //console.log(this.HEAP);
        //console.log(this.HEAP32);
        //console.log(this.HEAPF32);

        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];

        // input items
        this.inputs_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * CombFilterProcessor.buffer_size * this.sample_size);

        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;

        this.pathTable = [];

        // Send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                }
            }
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((CombFilterProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + CombFilterProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((CombFilterProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + CombFilterProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            CombFilterProcessor.parse_ui(this.json_object.ui, this, CombFilterProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.setParamValue = function (path, val)
        {
            this.HEAPF32[this.pathTable[path]] = val;
        }

        this.getParamValue = function (path)
        {
            return this.HEAPF32[this.pathTable[path]];
        }

        // Init resulting DSP
        this.initAux();
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
        // Check inputs
        if (this.numIn > 0 && ((input === undefined) || (input[0].length === 0))) {
            //console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && ((output === undefined) || (output[0].length === 0))) {
            //console.log("Process output error");
            return true;
        }
        
        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }
        
        // Update controls (possibly needed for sample accurate control)
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, CombFilterProcessor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals

CombFilterProcessor.buffer_size = 128;

CombFilterProcessor.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        // Integer version
        _abs: Math.abs,
        
        // Float version
        _acosf: Math.acos,
        _asinf: Math.asin,
        _atanf: Math.atan,
        _atan2f: Math.atan2,
        _ceilf: Math.ceil,
        _cosf: Math.cos,
        _expf: Math.exp,
        _floorf: Math.floor,
        _fmodf: function(x, y) { return x % y; },
        _logf: Math.log,
        _log10f: Math.log10,
        _max_f: Math.max,
        _min_f: Math.min,
        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        _powf: Math.pow,
        _roundf: Math.fround,
        _sinf: Math.sin,
        _sqrtf: Math.sqrt,
        _tanf: Math.tan,
           
        // Double version
        _acos: Math.acos,
        _asin: Math.asin,
        _atan: Math.atan,
        _atan2: Math.atan2,
        _ceil: Math.ceil,
        _cos: Math.cos,
        _exp: Math.exp,
        _floor: Math.floor,
        _fmod: function(x, y) { return x % y; },
        _log: Math.log,
        _log10: Math.log10,
        _max_: Math.max,
        _min_: Math.min,
        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
        _pow: Math.pow,
        _round: Math.fround,
        _sin: Math.sin,
        _sqrt: Math.sqrt,
        _tan: Math.tan,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM module
try {
    if (CombFilterProcessor.wasm_module == undefined) {
        CombFilterProcessor.wasm_module = new WebAssembly.Module(CombFilterProcessor.atob(getBase64CodeCombFilter()));
        registerProcessor('CombFilter', CombFilterProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust CombFilter cannot be loaded or compiled");
}

