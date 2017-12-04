
/*
Code generated with Faust version 2.5.9
Compilation options: -scal -ftz 2
*/

function getJSONSFlute() {
	return "{\"name\":\"Flute\",\"version\":\"2.5.9\",\"options\":\"-scal -ftz 2\",\"size\":\"65816\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Flute\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Flute\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Flute/ON/OFF_(ASR_Envelope)\",\"index\":\"0\",\"meta\":[{\"0\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Flute/Frequency\",\"index\":\"72\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"440\",\"min\":\"247\",\"max\":\"1200\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/Flute/Pressure\",\"index\":\"84\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.96\",\"min\":\"0.2\",\"max\":\"0.99\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Flute/Breath_Noise\",\"index\":\"140\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Vibrato Freq (Vibrato Envelope)\",\"address\":\"/Flute/Vibrato_Freq_(Vibrato_Envelope)\",\"index\":\"156\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.5\",\"max\":\"8\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSFlute() { return "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NTgxNiIsImlucHV0cyI6IjAiLCJvdXRwdXRzIjoiMSIsIm1ldGEiOlt7ImF1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImNvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJOb25saW5lYXIgV2F2ZUd1aWRlIEZsdXRlIn0seyJlbnZlbG9wZXMubGliL2F1dGhvciI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJlbnZlbG9wZXMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJlbnZlbG9wZXMubGliL25hbWUiOiJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5In0seyJlbnZlbG9wZXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7Imluc3RydW1lbnRzLmxpYi9hdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7Imluc3RydW1lbnRzLmxpYi9jb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJpbnN0cnVtZW50cy5saWIvbGljZW5jZSI6IlNUSy00LjMifSx7Imluc3RydW1lbnRzLmxpYi9uYW1lIjoiRmF1c3QtU1RLIFRvb2xzIExpYnJhcnkifSx7Imluc3RydW1lbnRzLmxpYi92ZXJzaW9uIjoiMS4wIn0seyJsaWNlbmNlIjoiU1RLLTQuMyJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoiRmx1dGUifSx7Im5vaXNlcy5saWIvbmFtZSI6IkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5In0seyJub2lzZXMubGliL3ZlcnNpb24iOiIwLjAifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJGbHV0ZSIsIml0ZW1zIjpbeyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiT04vT0ZGIChBU1IgRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9PTi9PRkZfKEFTUl9FbnZlbG9wZSkiLCJpbmRleCI6IjAiLCJtZXRhIjpbeyIwIjoiIn1dLCJpbml0IjoiMCIsIm1pbiI6IjAiLCJtYXgiOiIxIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJGcmVxdWVuY3kiLCJhZGRyZXNzIjoiL0ZsdXRlL0ZyZXF1ZW5jeSIsImluZGV4IjoiNzIiLCJtZXRhIjpbeyIxIjoiIn0seyJhY2MiOiIxIDEgLTEwIDAgMTAifV0sImluaXQiOiI0NDAiLCJtaW4iOiIyNDciLCJtYXgiOiIxMjAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJQcmVzc3VyZSIsImFkZHJlc3MiOiIvRmx1dGUvUHJlc3N1cmUiLCJpbmRleCI6Ijg0IiwibWV0YSI6W3siMiI6IiJ9LHsiYWNjIjoiMSAwIC0xMCAwIDEwIn0seyJzdHlsZSI6Imtub2IifV0sImluaXQiOiIwLjk2IiwibWluIjoiMC4yIiwibWF4IjoiMC45OSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiQnJlYXRoIE5vaXNlIiwiYWRkcmVzcyI6Ii9GbHV0ZS9CcmVhdGhfTm9pc2UiLCJpbmRleCI6IjE0MCIsIm1ldGEiOlt7IjMiOiIifSx7ImFjYyI6IjIgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAuMDEiLCJtYXgiOiIwLjIiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlZpYnJhdG8gRnJlcSAoVmlicmF0byBFbnZlbG9wZSkiLCJhZGRyZXNzIjoiL0ZsdXRlL1ZpYnJhdG9fRnJlcV8oVmlicmF0b19FbnZlbG9wZSkiLCJpbmRleCI6IjE1NiIsIm1ldGEiOlt7IjQiOiIifSx7ImFjYyI6IjAgMSAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0IiwibWluIjoiMC41IiwibWF4IjoiOCIsInN0ZXAiOiIwLjEifV19XX0w"; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class SFluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SFluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SFluteProcessor.parse_items(group.items, obj, callback);
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
            SFluteProcessor.parse_items(item.items, obj, callback);
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
            SFluteProcessor.parse_items(item.items, obj, callback);
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
            if (item.meta !== undefined) {
                for (var i = 0; i < item.meta.length; i++) {
                    if (item.meta[i].midi !== undefined) {
                        if (item.meta[i].midi.trim() === "pitchwheel") {
                            obj.fPitchwheelLabel.push(item.address);
                        } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                            obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                        }
                    }
                }
            }
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
                nUint24 |= SFluteProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
   
    static get parameterDescriptors () 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        SFluteProcessor.parse_ui(JSON.parse(getJSONSFlute()).ui, params, SFluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSFlute());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = SFluteProcessor.SFlute_instance.exports;
        this.HEAP = SFluteProcessor.SFlute_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        console.log(this.HEAP);
        console.log(this.HEAP32);
        console.log(this.HEAPF32);

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
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SFluteProcessor.buffer_size * this.sample_size);

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
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SFluteProcessor.parse_ui(this.json_object.ui, this, SFluteProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SFluteProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                    if (this.output_handler) {
                   		this.output_handler(path, this.getParamValue(path));
                   	}
                }
            }
        }

        this.pitchWheel = function (channel, wheel)
        {
            for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
                var path = this.fPitchwheelLabel[i];
                this.setParamValue(path, Math.pow(2.0, wheel/12.0));
                if (this.output_handler) {
                   	this.output_handler(path, this.getParamValue(path));
                }
            }
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

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        switch (msg.type) {
            // Generic MIDI message
            case "midi": this.midiMessage(msg.data); break;
            // Typed MIDI message
            case "keyOn": this.keyOn(msg.data[0], msg.data[1], msg.data[2]); break;
            case "keyOff": this.keyOff(msg.data[0], msg.data[1], msg.data[2]); break;
            case "ctrlChange": this.ctrlChange(msg.data[0], msg.data[1], msg.data[2]); break;
            case "pitchWheel": this.pitchWheel(msg.data[0], msg.data[1]); break;
            // Generic data message
            case "param": this.setParamValue(msg.key, msg.value); break;
            //case "patch": this.onpatch(msg.data); break;
        }
    }
    
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 8 || ((cmd === 9) && (data2 === 0))) {
            //this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            //this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            //this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            //this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
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
        this.factory.compute(this.dsp, SFluteProcessor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            //console.log("output.length " + output.length);
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals

SFluteProcessor.buffer_size = 128;

SFluteProcessor.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        absf: Math.abs,
        acosf: Math.acos,
        asinf: Math.asin,
        atanf: Math.atan,
        atan2f: Math.atan2,
        ceilf: Math.ceil,
        cosf: Math.cos,
        expf: Math.exp,
        floorf: Math.floor,
        fmodf: function(x, y) { return x % y; },
        logf: Math.log,
        log10f: Math.log10,
        max_f: Math.max,
        min_f: Math.min,
        remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        powf: Math.pow,
        roundf: Math.fround,
        sinf: Math.sin,
        sqrtf: Math.sqrt,
        tanf: Math.tan,
            
        abs: Math.abs,
        acos: Math.acos,
        asin: Math.asin,
        atan: Math.atan,
        atan2: Math.atan2,
        ceil: Math.ceil,
        cos: Math.cos,
        exp: Math.exp,
        floor: Math.floor,
        fmod: function(x, y) { return x % y; },
        log: Math.log,
        log10: Math.log10,
        max_: Math.max,
        min_: Math.min,
        remainder:function(x, y) { return x - Math.round(x/y) * y; },
        pow: Math.pow,
        round: Math.fround,
        sin: Math.sin,
        sqrt: Math.sqrt,
        tan: Math.tan,
            
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM module
try {
    let wasm_module = new WebAssembly.Module(SFluteProcessor.atob(getBase64CodeSFlute()));
    SFluteProcessor.SFlute_instance = new WebAssembly.Instance(wasm_module, SFluteProcessor.importObject);
    registerProcessor('SFlute', SFluteProcessor);
} catch (e) {
    console.log(e); console.log("Faust SFlute cannot be loaded or compiled");
}

