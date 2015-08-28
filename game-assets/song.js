/*var piano = new Wad({
    source  : 'sine',
    volume  : 0.8,   // Peak volume can range from 0 to an arbitrarily high number, but you probably shouldn't set it higher than 1.
    loop    : false, // If true, the audio will loop. This parameter only works for audio clips, and does nothing for oscillators.
    pitch   : 'A4',  // Set a default pitch on the constuctor if you don't want to set the pitch on play().
    detune  : 0,     // Set a default detune on the constructor if you don't want to set detune on play(). Detune is measured in cents. 100 cents is equal to 1 semitone.
    panning : -0.5,    // Horizontal placement of the sound source. Possible values are from 1 to -1.

    env     : {      // This is the ADSR envelope.
        attack  : 0.1,  // Time in seconds from onset to peak volume.  Common values for oscillators may range from 0.05 to 0.3.
        decay   : 0.05,  // Time in seconds from peak volume to sustain volume.
        sustain : 0.6,  // Sustain volume level. This is a percent of the peak volume, so sensible values are between 0 and 1.
        hold    : 1, // Time in seconds to maintain the sustain volume level. If this is not set to a lower value, oscillators must be manually stopped by calling their stop() method.
        release : 0.1     // Time in seconds from the end of the hold period to zero volume, or from calling stop() to zero volume.
    },
    filter  : {
        type      : 'lowpass', // What type of filter is applied.
        frequency : 600,       // The frequency, in hertz, to which the filter is applied.
        q         : 1,         // Q-factor.  No one knows what this does. The default value is 1. Sensible values are from 0 to 10.
        env       : {          // Filter envelope.
            frequency : 800, // If this is set, filter frequency will slide from filter.frequency to filter.env.frequency when a note is triggered.
            attack    : 0.5  // Time in seconds for the filter frequency to slide from filter.frequency to filter.env.frequency
        }
    },
    reverb  : {
        wet     : 1,                                            // Volume of the reverberations.
        impulse : 'http://www.myServer.com/path/to/impulse.wav' // A URL for an impulse response file, if you do not want to use the default impulse response.
    },
    delay   : {
        delayTime : 0.5,  // Time in seconds between each delayed playback.
        wet       : 0.25, // Relative volume change between the original sound and the first delayed playback.
        feedback  : 0.25, // Relative volume change between each delayed playback and the next.
    },
    vibrato : { // A vibrating pitch effect.  Only works for oscillators.
        shape     : 'sine', // shape of the lfo waveform. Possible values are 'sine', 'sawtooth', 'square', and 'triangle'.
        magnitude : 3,      // how much the pitch changes. Sensible values are from 1 to 10.
        speed     : 4,      // How quickly the pitch changes, in cycles per second.  Sensible values are from 0.1 to 10.
        attack    : 0       // Time in seconds for the vibrato effect to reach peak magnitude.
    },
    tremolo : { // A vibrating volume effect.
        shape     : 'sine', // shape of the lfo waveform. Possible values are 'sine', 'sawtooth', 'square', and 'triangle'.
        magnitude : 3,      // how much the volume changes. Sensible values are from 1 to 10.
        speed     : 4,      // How quickly the volume changes, in cycles per second.  Sensible values are from 0.1 to 10.
        attack    : 0       // Time in seconds for the tremolo effect to reach peak magnitude.
    }
});*/


var BPM = 100;
var BEAT = 60 / BPM;

var piano = new Wad({
    source: 'square',
    volume: 0.8,
    env: {
         attack: 0.01,
         decay : 0.005,
         sustain : 0.2,
         hold : 0.1,
         release : 0.3
    },
    filter: {
        type: 'lowpass',
        frequency: 1200,
        q: 8.5,
        env: {
            attack: 0.2,
            frequency: 600
        }
    }
});

function playSong() {
    console.log("playing");
    piano.play({pitch : 'C5',  wait : BEAT * (0.75)});
    piano.play({pitch : 'Eb5', wait : BEAT * (1   ), filter : { q : 15}});
    piano.play({pitch : 'C5',  wait : BEAT * (1.5 )});
    piano.play({pitch : 'F5',  wait : BEAT * (1.75), env : {release : 0.2}});

    piano.play({pitch : 'C5',  wait : BEAT * (4.75)});
    piano.play({pitch : 'Eb5', wait : BEAT * (5   ), filter : { q : 15}});
    piano.play({pitch : 'C5',  wait : BEAT * (5.5 )});
    piano.play({pitch : 'F5',  wait : BEAT * (5.75), env : {release : 0.2}});

    piano.play({pitch : 'C5',  wait : BEAT * (8.75)});
    piano.play({pitch : 'Eb5', wait : BEAT * (9   ), filter : { q : 15}});
    piano.play({pitch : 'C5',  wait : BEAT * (9.5 )});
    piano.play({pitch : 'F5',  wait : BEAT * (9.75), env : {release : 0.2}});

    piano.play({pitch : 'C5',  wait : BEAT * (12.75)});
    piano.play({pitch : 'Eb5', wait : BEAT * (13   ), filter : { q : 15}});
    piano.play({pitch : 'C5',  wait : BEAT * (14.75)});
    piano.play({pitch : 'Eb5', wait : BEAT * (15   )});
    piano.play({pitch : 'G5',  wait : BEAT * (15.5 ), filter : { q : 15}});
}

function stopSong() {
    console.log("stopping all sound");
    piano.stop('A4');
    piano.stop('B4');
    piano.stop('C4');
}
