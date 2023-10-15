// 对战地图svg绘制部分
import {base} from './../util/base';
let mapTpl = {
    props: ['radiant', 'dire'],
    template: `
        <div class="live-map pull-left">
            <svg width="306" height="300">
                <g id="g3695" transform="translate(-4.984375,-0.01372937)">
                    <g id="g3700" transform="matrix(0.30741387,0,0,0.30741387,-0.10168,-13.22643)">
                        <g id="dt1t" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24" style="fill:#000000" d="m33.478-73.962,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50" style="fill:#000000" d="m23.382-68.133,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92" style="fill:#000000" d="m23.382-43.873,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30" style="fill:#000000" d="m23.382-68.133,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48" style="fill:#000000" d="m33.462-62.314,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8" style="fill:#000000" d="m23.382-68.133,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="dt2t" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-1" style="fill:#000000" d="m329.82-72.684,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-2" style="fill:#000000" d="m319.73-66.856,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-8" style="fill:#000000" d="m319.73-42.595,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-4" style="fill:#000000" d="m319.73-66.856,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-3" style="fill:#000000" d="m329.81-61.036,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-4" style="fill:#000000" d="m319.73-66.856,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="dt3t" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-6" style="fill:#000000" d="m549.87-57.236,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-6" style="fill:#000000" d="m539.78-51.408,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-5" style="fill:#000000" d="m539.78-27.147,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-2" style="fill:#000000" d="m539.78-51.408,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-7" style="fill:#000000" d="m549.86-45.588,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-0" style="fill:#000000" d="m539.78-51.408,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="dt4t" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-4" style="fill:#ff0000" d="m639.47,2.8222,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-0" style="fill:#ff0000" d="m629.38,8.6509,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-2" style="fill:#ff0000" d="m629.38,32.911,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-5" style="fill:#ff0000" d="M629.38,8.6509,639.46,14.47,649.55,8.6415,639.47,2.8222z"></path>
                            <path id="path4181-48-39" style="fill:#ff0000" d="m639.46,14.47,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-6" style="fill:#ff0000" d="m629.38,8.6509,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="da" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-40-8-4-2" style="fill:#ff0000" d="m678.55-2.9064,25.704,14.84,0,15.405-25.704-14.84z"></path>
                            <path id="path4175-50-4-2-2-8" style="fill:#ff0000" d="m653.79,11.389,0,15.405,24.76-14.295,0-15.405z"></path>
                            <path id="path4183-92-0-3-3-4" style="fill:#ff0000" d="m653.79,26.794,25.704,14.84,24.76-14.295-25.704-14.84z"></path>
                            <path id="path4177-30-8-7-0-9" style="fill:#ff0000" d="m653.79,11.389,25.704,14.84,24.76-14.295-25.704-14.84z"></path>
                            <path id="path4181-48-01-0-1-6" style="fill:#ff0000" d="m679.49,26.229,0,15.405,24.76-14.295,0-15.405z"></path>
                            <path id="path4179-8-8-4-6-4" style="fill:#ff0000" d="m653.79,11.389,25.704,14.84,0,15.405-25.704-14.84z"></path>
                        </g>
                        <g id="dt4b" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-2" style="fill:#ff0000" d="m660.27,23.623,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-29" style="fill:#ff0000" d="m650.18,29.452,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-6" style="fill:#ff0000" d="m650.18,53.712,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-7" style="fill:#ff0000" d="m650.18,29.452,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-8" style="fill:#ff0000" d="m660.26,35.271,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-04" style="fill:#ff0000" d="m650.18,29.452,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="dt3m" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-47" style="fill:#ff0000" d="m593.09,69.619,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-5" style="fill:#ff0000" d="m582.99,75.448,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-4" style="fill:#ff0000" d="m582.99,99.708,10.08,5.822,10.1-5.831-10.08-5.82z"></path>
                            <path id="path4177-30-71" style="fill:#ff0000" d="m582.99,75.448,10.08,5.819,10.1-5.829-10.08-5.819z"></path>
                            <path id="path4181-48-0" style="fill:#ff0000" d="m593.07,81.267,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-69" style="fill:#ff0000" d="m582.99,75.448,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="drmb" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="matrix(1.5960011,0,0,1.5960011,1232.1689,-2503.5926)">
                            <g id="g4173-3-04-9-9-5-7" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;">
                                <path id="path4185-24-40-8-4-5-5" style="fill:#ff0000" d="m-187.91,1756.9,9.615,5.5512,0,3.9599-9.615-5.5512z"></path>
                                <path id="path4175-50-4-2-2-9-37" style="fill:#ff0000" d="m-196.72,1762,0,3.9599,8.8053-5.0838,0-3.9599z"></path>
                                <path id="path4183-92-0-3-3-1-81" style="fill:#ff0000" d="m-196.72,1765.9,9.615,5.5511,8.8053-5.0837-9.615-5.5512z"></path>
                                <path id="path4177-30-8-7-0-8-8" style="fill:#ff0000" d="m-196.72,1762,9.615,5.5512,8.8053-5.0838-9.615-5.5512z"></path>
                                <path id="path4181-48-01-0-1-8-0" style="fill:#ff0000" d="m-187.1,1767.5,0,3.9598,8.8053-5.0837,0-3.9599z"></path>
                                <path id="path4179-8-8-4-6-1-19" style="fill:#ff0000" d="m-196.72,1762,9.615,5.5512,0,3.9598-9.615-5.5511z"></path>
                            </g>
                            <g id="g4173-3-04-9-9-5-9-23" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;">
                                <path id="path4185-24-40-8-4-5-0-4" style="fill:#ff0000" d="m-187.84,1756.7,6.3004,3.6375,0,1.77-6.3004-3.6375z"></path>
                                <path id="path4175-50-4-2-2-9-9-503" style="fill:#ff0000" d="m-193.54,1760,0,1.77,5.7032-3.2927,0-1.77z"></path>
                                <path id="path4183-92-0-3-3-1-2-6" style="fill:#ff0000" d="m-193.54,1761.8,6.3004,3.6375,5.7032-3.2927-6.3004-3.6375z"></path>
                                <path id="path4177-30-8-7-0-8-6-58" style="fill:#ff0000" d="m-193.54,1760,6.3004,3.6376,5.7032-3.2928-6.3004-3.6375z"></path>
                                <path id="path4181-48-01-0-1-8-9-84" style="fill:#ff0000" d="m-187.24,1763.7,0,1.7699,5.7032-3.2927,0-1.77z"></path>
                                <path id="path4179-8-8-4-6-1-7-01" style="fill:#ff0000" d="m-193.54,1760,6.3004,3.6376,0,1.7699-6.3004-3.6375z"></path>
                            </g>
                        </g>
                        <g id="drrb" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="matrix(1.5960011,0,0,1.5960011,364.85376,-3108.2244)">
                            <g id="g4173-3-04-9-9-5-7-4" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;">
                                <path id="path4185-24-40-8-4-5-5-4" style="fill:#ff0000" d="m331.53,2137,9.615,5.5512,0,3.9599-9.615-5.5512z"></path>
                                <path id="path4175-50-4-2-2-9-37-7" style="fill:#ff0000" d="m322.73,2142.1,0,3.9598,8.8053-5.0837,0-3.9599z"></path>
                                <path id="path4183-92-0-3-3-1-81-5" style="fill:#ff0000" d="m322.73,2146,9.615,5.5512,8.8053-5.0837-9.615-5.5512z"></path>
                                <path id="path4177-30-8-7-0-8-8-3" style="fill:#ff0000" d="m322.73,2142.1,9.615,5.5512,8.8053-5.0838-9.615-5.5512z"></path>
                                <path id="path4181-48-01-0-1-8-0-3" style="fill:#ff0000" d="m332.34,2147.6,0,3.9598,8.8053-5.0837,0-3.9599z"></path>
                                <path id="path4179-8-8-4-6-1-19-1" style="fill:#ff0000" d="m322.73,2142.1,9.615,5.5512,0,3.9598-9.615-5.5512z"></path>
                            </g>
                            <g id="g4173-3-04-9-9-5-9-23-4" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;">
                                <path id="path4185-24-40-8-4-5-0-4-9" style="fill:#ff0000" d="m331.61,2136.8,6.3004,3.6376,0,1.7699-6.3004-3.6375z"></path>
                                <path id="path4175-50-4-2-2-9-9-503-1" style="fill:#ff0000" d="m325.9,2140.1,0,1.77,5.7032-3.2928,0-1.77z"></path>
                                <path id="path4183-92-0-3-3-1-2-6-7" style="fill:#ff0000" d="m325.9,2141.9,6.3004,3.6375,5.7032-3.2928-6.3004-3.6375z"></path>
                                <path id="path4177-30-8-7-0-8-6-58-7" style="fill:#ff0000" d="m325.9,2140.1,6.3004,3.6375,5.7032-3.2927-6.3004-3.6376z"></path>
                                <path id="path4181-48-01-0-1-8-9-84-8" style="fill:#ff0000" d="m332.2,2143.7,0,1.77,5.7032-3.2928,0-1.7699z"></path>
                                <path id="path4179-8-8-4-6-1-7-01-8" style="fill:#ff0000" d="m325.9,2140.1,6.3004,3.6375,0,1.77-6.3004-3.6375z"></path>
                            </g>
                        </g>
                        <g id="dt3b" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-23" style="fill:#ff0000" d="m723.22,117.42,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-8" style="fill:#ff0000" d="m713.12,123.25,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-58" style="fill:#ff0000" d="m713.12,147.51,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-1" style="fill:#ff0000" d="m713.12,123.25,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-78" style="fill:#ff0000" d="m723.2,129.07,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-61" style="fill:#ff0000" d="m713.12,123.25,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="dt2m" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-9" style="fill:#ff0000" d="m485.4,170.45,10.079,5.8193,0,24.26-10.08-5.82z"></path>
                            <path id="path4175-50-53" style="fill:#ff0000" d="m475.3,176.28,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-61" style="fill:#ff0000" d="m475.3,200.54,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-50" style="fill:#ff0000" d="m475.3,176.28,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-2" style="fill:#ff0000" d="m485.38,182.1,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-9" style="fill:#ff0000" d="m475.3,176.28,10.079,5.8193,0,24.26-10.08-5.82z"></path>
                        </g>
                        <g id="dt1m" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-40" style="fill:#ff0000" d="m392.45,280.94,10.079,5.8193,0,24.26-10.08-5.82z"></path>
                            <path id="path4175-50-4" style="fill:#ff0000" d="m382.36,286.77,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-0" style="fill:#ff0000" d="m382.36,311.03,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-8" style="fill:#ff0000" d="m382.36,286.77,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-01" style="fill:#ff0000" d="m392.44,292.59,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-8" style="fill:#ff0000" d="m382.36,286.77,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="dt2b" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-62" style="fill:#ff0000" d="m723.08,288.81,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-54" style="fill:#ff0000" d="m712.99,294.64,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-9" style="fill:#ff0000" d="m712.99,318.9,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-3" style="fill:#ff0000" d="m712.99,294.64,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-20" style="fill:#ff0000" d="m723.07,300.46,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-95" style="fill:#ff0000" d="m712.99,294.64,10.079,5.8193,0,24.26-10.08-5.82z"></path>
                        </g>
                        <g id="dt1b" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-5" style="fill:#ff0000" d="m710.65,409.38,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-47" style="fill:#ff0000" d="m700.56,415.21,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-26" style="fill:#ff0000" d="m700.56,439.47,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-25" style="fill:#ff0000" d="m700.56,415.21,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-9" style="fill:#ff0000" d="m710.64,421.03,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-7" style="fill:#ff0000" d="m700.56,415.21,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="rt1t" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-40-3" style="fill:#000000" d="m-51.836,188.96,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-4-6" style="fill:#000000" d="m-61.932,194.78,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-0-9" style="fill:#000000" d="m-61.932,219.04,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-8-6" style="fill:#000000" d="m-61.932,194.78,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-01-5" style="fill:#000000" d="m-51.852,200.6,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-8-7" style="fill:#000000" d="m-61.932,194.78,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="rt2t" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-40-9" style="fill:#000000" d="m-55.156,357.31,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-4-4" style="fill:#000000" d="m-65.252,363.14,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-0-5" style="fill:#000000" d="m-65.252,387.4,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-8-8" style="fill:#000000" d="m-65.252,363.14,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-01-3" style="fill:#000000" d="m-55.172,368.96,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-8-8" style="fill:#000000" d="m-65.252,363.14,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="rt3t" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-40-0" style="fill:#000000" d="m-85.625,512.98,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-4-8" style="fill:#000000" d="m-95.721,518.81,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-0-6" style="fill:#000000" d="m-95.721,543.07,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-8-4" style="fill:#000000" d="m-95.721,518.81,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-01-38" style="fill:#000000" d="m-85.641,524.63,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-8-3" style="fill:#000000" d="m-95.721,518.81,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="rt4t" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-40-6" style="fill:#00ff00" d="m-28.398,608.29,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-4-86" style="fill:#00ff00" d="m-38.494,614.12,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-0-8" style="fill:#00ff00" d="m-38.494,638.38,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-8-42" style="fill:#00ff00" d="m-38.494,614.12,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-01-8" style="fill:#00ff00" d="m-28.415,619.94,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-8-9" style="fill:#00ff00" d="m-38.494,614.12,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="rt4b" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-40-8" style="fill:#00ff00" d="m-10.43,625.28,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-4-2" style="fill:#00ff00" d="m-20.525,631.11,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-0-3" style="fill:#00ff00" d="m-20.525,655.37,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-8-7" style="fill:#00ff00" d="m-20.525,631.11,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-01-0" style="fill:#00ff00" d="m-10.446,636.93,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-8-4" style="fill:#00ff00" d="m-20.525,631.11,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="rt3m" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-40-7" style="fill:#000000" d="m40.156,559.66,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-4-3" style="fill:#000000" d="m30.061,565.49,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-0-2" style="fill:#000000" d="m30.061,589.75,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-8-0" style="fill:#000000" d="m30.061,565.49,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-01-2" style="fill:#000000" d="m40.14,571.31,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-8-1" style="fill:#000000" d="m30.061,565.49,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="rt3b" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-40-04" style="fill:#000000" d="m86.641,687.39,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-4-0" style="fill:#000000" d="m76.545,693.22,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-0-68" style="fill:#000000" d="m76.545,717.48,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-8-44" style="fill:#000000" d="m76.545,693.22,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-01-7" style="fill:#000000" d="m86.624,699.04,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-8-96" style="fill:#000000" d="m76.545,693.22,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="rt2m" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-40-97" style="fill:#000000" d="m108.13,476.06,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-4-9" style="fill:#000000" d="m98.029,481.89,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-0-56" style="fill:#000000" d="m98.029,506.15,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-8-08" style="fill:#000000" d="m98.029,481.89,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-01-88" style="fill:#000000" d="m108.11,487.71,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-8-0" style="fill:#000000" d="m98.029,481.89,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="rt1m" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-40-74" style="fill:#000000" d="m235.27,388.76,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-4-24" style="fill:#000000" d="m225.18,394.59,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-0-92" style="fill:#000000" d="m225.18,418.85,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-8-2" style="fill:#000000" d="m225.18,394.59,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-01-9" style="fill:#000000" d="m235.26,400.41,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-8-85" style="fill:#000000" d="m225.18,394.59,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="rt2b" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-40-5" style="fill:#000000" d="m294.65,687.2,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-4-28" style="fill:#000000" d="m284.55,693.03,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-0-30" style="fill:#000000" d="m284.55,717.29,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-8-78" style="fill:#000000" d="m284.55,693.03,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-01-94" style="fill:#000000" d="m294.63,698.85,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-8-76" style="fill:#000000" d="m284.55,693.03,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                        </g>
                        <g id="rt1b" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-40-36" style="fill:#000000" d="m639.18,686.61,10.079,5.8193,0,24.26-10.079-5.8193z"></path>
                            <path id="path4175-50-4-91" style="fill:#000000" d="m629.08,692.44,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4183-92-0-80" style="fill:#000000" d="m629.08,716.7,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4177-30-8-428" style="fill:#000000" d="m629.08,692.44,10.079,5.8193,10.096-5.8288-10.079-5.8193z"></path>
                            <path id="path4181-48-01-4" style="fill:#000000" d="m639.16,698.26,0,24.26,10.096-5.8288,0-24.26z"></path>
                            <path id="path4179-8-8-6" style="fill:#000000" d="m629.08,692.44,10.079,5.8193,0,24.26-10.08-5.82z"></path>
                        </g>
                        <g id="ra" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;" transform="translate(186.90002,188.82246)">
                            <path id="path4185-24-40-8-4" style="fill:#000000" d="m-47.914,638.22,25.704,14.84,0,15.405-25.704-14.84z"></path>
                            <path id="path4175-50-4-2-2" style="fill:#000000" d="m-72.674,652.51,0,15.405,24.76-14.295,0-15.405z"></path>
                            <path id="path4183-92-0-3-3" style="fill:#000000" d="m-72.674,667.92,25.704,14.84,24.76-14.295-25.704-14.84z"></path>
                            <path id="path4177-30-8-7-0" style="fill:#000000" d="m-72.674,652.51,25.704,14.84,24.76-14.295-25.704-14.84z"></path>
                            <path id="path4181-48-01-0-1" style="fill:#000000" d="m-46.969,667.35,0,15.405,24.76-14.295,0-15.405z"></path>
                            <path id="path4179-8-8-4-6" style="fill:#000000" d="m-72.674,652.51,25.704,14.84,0,15.405-25.704-14.84z"></path>
                        </g>
                        <g id="rrrt" transform="matrix(1.5960011,0,0,1.5960011,363.4055,-1026.7355)">
                            <g id="g4173-3-04-9-9-5" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;">
                                <path id="path4185-24-40-8-4-5" style="fill:#000000" d="m-175.47,1104.2,9.615,5.5512,0,3.9599-9.615-5.5512z"></path>
                                <path id="path4175-50-4-2-2-9" style="fill:#000000" d="m-184.27,1109.3,0,3.9599,8.8053-5.0838,0-3.9599z"></path>
                                <path id="path4183-92-0-3-3-1" style="fill:#000000" d="m-184.27,1113.2,9.615,5.5511,8.8053-5.0837-9.615-5.5512z"></path>
                                <path id="path4177-30-8-7-0-8" style="fill:#000000" d="m-184.27,1109.3,9.615,5.5512,8.8053-5.0838-9.615-5.5512z"></path>
                                <path id="path4181-48-01-0-1-8" style="fill:#000000" d="m-174.66,1114.8,0,3.9598,8.8053-5.0837,0-3.9599z"></path>
                                <path id="path4179-8-8-4-6-1" style="fill:#000000" d="m-184.27,1109.3,9.615,5.5512,0,3.9598-9.615-5.5511z"></path>
                            </g>
                            <g id="g4173-3-04-9-9-5-9" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;">
                                <path id="path4185-24-40-8-4-5-0" style="fill:#000000" d="m-175.39,1104,6.3004,3.6376,0,1.7699-6.3004-3.6375z"></path>
                                <path id="path4175-50-4-2-2-9-9" style="fill:#000000" d="m-181.09,1107.3,0,1.77,5.7032-3.2928,0-1.77z"></path>
                                <path id="path4183-92-0-3-3-1-2" style="fill:#000000" d="m-181.09,1109.1,6.3004,3.6375,5.7032-3.2928-6.3004-3.6375z"></path>
                                <path id="path4177-30-8-7-0-8-6" style="fill:#000000" d="m-181.09,1107.3,6.3004,3.6375,5.7032-3.2927-6.3004-3.6376z"></path>
                                <path id="path4181-48-01-0-1-8-9" style="fill:#000000" d="m-174.79,1111,0,1.77,5.7032-3.2928,0-1.7699z"></path>
                                <path id="path4179-8-8-4-6-1-7" style="fill:#000000" d="m-181.09,1107.3,6.3004,3.6375,0,1.77-6.3004-3.6375z"></path>
                            </g>
                        </g>
                        <g id="rrmt" transform="matrix(1.5960011,0,0,1.5960011,417.7449,-2067.6273)">
                            <g id="g4173-3-04-9-9-5-0" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;">
                                <path id="path4185-24-40-8-4-5-8" style="fill:#000000" d="m-187.91,1756.9,9.615,5.5512,0,3.9599-9.615-5.5512z"></path>
                                <path id="path4175-50-4-2-2-9-219" style="fill:#000000" d="m-196.72,1762,0,3.9598,8.8053-5.0837,0-3.9599z"></path>
                                <path id="path4183-92-0-3-3-1-3" style="fill:#000000" d="m-196.72,1765.9,9.6149,5.5512,8.8053-5.0837-9.615-5.5512z"></path>
                                <path id="path4177-30-8-7-0-8-86" style="fill:#000000" d="m-196.72,1762,9.6149,5.5512,8.8053-5.0838-9.615-5.5512z"></path>
                                <path id="path4181-48-01-0-1-8-3" style="fill:#000000" d="m-187.1,1767.5,0,3.9598,8.8053-5.0837,0-3.9599z"></path>
                                <path id="path4179-8-8-4-6-1-57" style="fill:#000000" d="m-196.72,1762,9.6149,5.5512,0,3.9598-9.6149-5.5512z"></path>
                            </g>
                            <g id="g4173-3-04-9-9-5-9-19" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;">
                                <path id="path4185-24-40-8-4-5-0-2" style="fill:#000000" d="m-187.84,1756.7,6.3004,3.6375,0,1.77-6.3004-3.6375z"></path>
                                <path id="path4175-50-4-2-2-9-9-50" style="fill:#000000" d="m-193.54,1760,0,1.77,5.7032-3.2927,0-1.77z"></path>
                                <path id="path4183-92-0-3-3-1-2-86" style="fill:#000000" d="m-193.54,1761.8,6.3004,3.6376,5.7032-3.2928-6.3004-3.6375z"></path>
                                <path id="path4177-30-8-7-0-8-6-82" style="fill:#000000" d="m-193.54,1760,6.3004,3.6376,5.7032-3.2928-6.3004-3.6375z"></path>
                                <path id="path4181-48-01-0-1-8-9-2" style="fill:#000000" d="m-187.24,1763.7,0,1.77,5.7032-3.2928,0-1.77z"></path>
                                <path id="path4179-8-8-4-6-1-7-0" style="fill:#000000" d="m-193.54,1760,6.3004,3.6376,0,1.77-6.3004-3.6376z"></path>
                            </g>
                        </g>
                        <g id="rrrm" transform="matrix(1.5960011,0,0,1.5960011,496.62199,-2037.9675)">
                            <g id="g4173-3-04-9-9-5-4" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;">
                                <path id="path4185-24-40-8-4-5-02" style="fill:#000000" d="m-187.91,1756.9,9.615,5.5512,0,3.9598-9.615-5.5512z"></path>
                                <path id="path4175-50-4-2-2-9-1" style="fill:#000000" d="m-196.72,1762,0,3.9599,8.8053-5.0838,0-3.9598z"></path>
                                <path id="path4183-92-0-3-3-1-9" style="fill:#000000" d="m-196.72,1765.9,9.6149,5.5512,8.8053-5.0838-9.615-5.5512z"></path>
                                <path id="path4177-30-8-7-0-8-50" style="fill:#000000" d="m-196.72,1762,9.6149,5.5512,8.8053-5.0837-9.615-5.5512z"></path>
                                <path id="path4181-48-01-0-1-8-31" style="fill:#000000" d="m-187.1,1767.5,0,3.9599,8.8053-5.0838,0-3.9598z"></path>
                                <path id="path4179-8-8-4-6-1-4" style="fill:#000000" d="m-196.72,1762,9.6149,5.5512,0,3.9599-9.6149-5.5512z"></path>
                            </g>
                            <g id="g4173-3-04-9-9-5-9-53" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;">
                                <path id="path4185-24-40-8-4-5-0-7" style="fill:#000000" d="m-187.84,1756.7,6.3004,3.6375,0,1.77-6.3004-3.6376z"></path>
                                <path id="path4175-50-4-2-2-9-9-0" style="fill:#000000" d="m-193.54,1760,0,1.77,5.7032-3.2928,0-1.7699z"></path>
                                <path id="path4183-92-0-3-3-1-2-80" style="fill:#000000" d="m-193.54,1761.8,6.3004,3.6375,5.7032-3.2927-6.3004-3.6376z"></path>
                                <path id="path4177-30-8-7-0-8-6-7" style="fill:#000000" d="m-193.54,1760,6.3004,3.6375,5.7032-3.2927-6.3004-3.6375z"></path>
                                <path id="path4181-48-01-0-1-8-9-4" style="fill:#000000" d="m-187.24,1763.7,0,1.77,5.7032-3.2927,0-1.77z"></path>
                                <path id="path4179-8-8-4-6-1-7-6" style="fill:#000000" d="m-193.54,1760,6.3004,3.6375,0,1.77-6.3004-3.6375z"></path>
                            </g>
                        </g>
                        <g id="rrmm" transform="matrix(1.5960011,0,0,1.5960011,521.23137,-2020.78)">
                            <g id="g4173-3-04-9-9-5-84" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;">
                                <path id="path4185-24-40-8-4-5-030" style="fill:#00ff00" d="m-187.91,1756.9,9.615,5.5512,0,3.9598-9.615-5.5512z"></path>
                                <path id="path4175-50-4-2-2-9-51" style="fill:#00ff00" d="m-196.72,1762,0,3.9599,8.8053-5.0838,0-3.9598z"></path>
                                <path id="path4183-92-0-3-3-1-8" style="fill:#00ff00" d="m-196.72,1765.9,9.6149,5.5512,8.8053-5.0838-9.615-5.5512z"></path>
                                <path id="path4177-30-8-7-0-8-0" style="fill:#00ff00" d="m-196.72,1762,9.6149,5.5512,8.8053-5.0837-9.615-5.5512z"></path>
                                <path id="path4181-48-01-0-1-8-91" style="fill:#00ff00" d="m-187.1,1767.5,0,3.9599,8.8053-5.0838,0-3.9598z"></path>
                                <path id="path4179-8-8-4-6-1-0" style="fill:#00ff00" d="m-196.72,1762,9.6149,5.5512,0,3.9599-9.6149-5.5512z"></path>
                            </g>
                            <g id="g4173-3-04-9-9-5-9-89" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;">
                                <path id="path4185-24-40-8-4-5-0-67" style="fill:#00ff00" d="m-187.84,1756.7,6.3004,3.6375,0,1.77-6.3004-3.6376z"></path>
                                <path id="path4175-50-4-2-2-9-9-9" style="fill:#00ff00" d="m-193.54,1760,0,1.77,5.7032-3.2928,0-1.7699z"></path>
                                <path id="path4183-92-0-3-3-1-2-5" style="fill:#00ff00" d="m-193.54,1761.8,6.3004,3.6375,5.7032-3.2927-6.3004-3.6376z"></path>
                                <path id="path4177-30-8-7-0-8-6-6" style="fill:#00ff00" d="m-193.54,1760,6.3004,3.6375,5.7032-3.2927-6.3004-3.6375z"></path>
                                <path id="path4181-48-01-0-1-8-9-8" style="fill:#00ff00" d="m-187.24,1763.7,0,1.77,5.7032-3.2927,0-1.77z"></path>
                                <path id="path4179-8-8-4-6-1-7-4" style="fill:#00ff00" d="m-193.54,1760,6.3004,3.6375,0,1.77-6.3004-3.6375z"></path>
                            </g>
                        </g>
                        <g id="rrrb" transform="matrix(1.5960011,0,0,1.5960011,545.05949,-1930.9363)">
                            <g id="g4173-3-04-9-9-5-46" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;">
                                <path id="path4185-24-40-8-4-5-34" style="fill:#00ff00" d="m-187.91,1756.9,9.615,5.5512,0,3.9599-9.615-5.5512z"></path>
                                <path id="path4175-50-4-2-2-9-16" style="fill:#00ff00" d="m-196.72,1762,0,3.9598,8.8053-5.0837,0-3.9599z"></path>
                                <path id="path4183-92-0-3-3-1-6" style="fill:#00ff00" d="m-196.72,1765.9,9.6149,5.5512,8.8053-5.0837-9.615-5.5512z"></path>
                                <path id="path4177-30-8-7-0-8-63" style="fill:#00ff00" d="m-196.72,1762,9.6149,5.5512,8.8053-5.0838-9.615-5.5512z"></path>
                                <path id="path4181-48-01-0-1-8-7" style="fill:#00ff00" d="m-187.1,1767.5,0,3.9598,8.8053-5.0837,0-3.9599z"></path>
                                <path id="path4179-8-8-4-6-1-3" style="fill:#00ff00" d="m-196.72,1762,9.6149,5.5512,0,3.9598-9.6149-5.5512z"></path>
                            </g>
                            <g id="g4173-3-04-9-9-5-9-2" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;">
                                <path id="path4185-24-40-8-4-5-0-9" style="fill:#00ff00" d="m-187.84,1756.7,6.3004,3.6375,0,1.77-6.3004-3.6375z"></path>
                                <path id="path4175-50-4-2-2-9-9-07" style="fill:#00ff00" d="m-193.54,1760,0,1.77,5.7032-3.2927,0-1.77z"></path>
                                <path id="path4183-92-0-3-3-1-2-3" style="fill:#00ff00" d="m-193.54,1761.8,6.3004,3.6375,5.7032-3.2927-6.3004-3.6375z"></path>
                                <path id="path4177-30-8-7-0-8-6-5" style="fill:#00ff00" d="m-193.54,1760,6.3004,3.6376,5.7032-3.2928-6.3004-3.6375z"></path>
                                <path id="path4181-48-01-0-1-8-9-91" style="fill:#00ff00" d="m-187.24,1763.7,0,1.7699,5.7032-3.2927,0-1.77z"></path>
                                <path id="path4179-8-8-4-6-1-7-3" style="fill:#00ff00" d="m-193.54,1760,6.3004,3.6376,0,1.7699-6.3004-3.6375z"></path>
                            </g>
                        </g>
                        <g id="rrmb" transform="matrix(1.5960011,0,0,1.5960011,547.40324,-1905.5456)">
                            <g id="g4173-3-04-9-9-5-97" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;">
                                <path id="path4185-24-40-8-4-5-06" style="fill:#00ff00" d="m-187.91,1756.9,9.615,5.5512,0,3.9598-9.615-5.5512z"></path>
                                <path id="path4175-50-4-2-2-9-52" style="fill:#00ff00" d="m-196.72,1762,0,3.9599,8.8053-5.0838,0-3.9598z"></path>
                                <path id="path4183-92-0-3-3-1-98" style="fill:#00ff00" d="m-196.72,1765.9,9.6149,5.5512,8.8053-5.0838-9.615-5.5512z"></path>
                                <path id="path4177-30-8-7-0-8-1" style="fill:#00ff00" d="m-196.72,1762,9.6149,5.5512,8.8053-5.0837-9.615-5.5512z"></path>
                                <path id="path4181-48-01-0-1-8-96" style="fill:#00ff00" d="m-187.1,1767.5,0,3.9599,8.8053-5.0838,0-3.9598z"></path>
                                <path id="path4179-8-8-4-6-1-6" style="fill:#00ff00" d="m-196.72,1762,9.6149,5.5512,0,3.9599-9.6149-5.5512z"></path>
                            </g>
                            <g id="g4173-3-04-9-9-5-9-9" style="stroke-linejoin:round;stroke:#008000;stroke-linecap:round;fill:#00ff00;">
                                <path id="path4185-24-40-8-4-5-0-66" style="fill:#00ff00" d="m-187.84,1756.7,6.3004,3.6376,0,1.77-6.3004-3.6376z"></path>
                                <path id="path4175-50-4-2-2-9-9-4" style="fill:#00ff00" d="m-193.54,1760,0,1.77,5.7032-3.2928,0-1.77z"></path>
                                <path id="path4183-92-0-3-3-1-2-7" style="fill:#00ff00" d="m-193.54,1761.8,6.3004,3.6375,5.7032-3.2927-6.3004-3.6376z"></path>
                                <path id="path4177-30-8-7-0-8-6-3" style="fill:#00ff00" d="m-193.54,1760,6.3004,3.6375,5.7032-3.2927-6.3004-3.6376z"></path>
                                <path id="path4181-48-01-0-1-8-9-1" style="fill:#00ff00" d="m-187.24,1763.7,0,1.77,5.7032-3.2927,0-1.77z"></path>
                                <path id="path4179-8-8-4-6-1-7-64" style="fill:#00ff00" d="m-193.54,1760,6.3004,3.6375,0,1.77-6.3004-3.6375z"></path>
                            </g>
                        </g>
                        <g id="drmm" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="matrix(1.5960011,0,0,1.5960011,-510.27387,-3753.4812)">
                            <g id="g4173-3-04-9-9-5-7-4-7" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;">
                                <path id="path4185-24-40-8-4-5-5-4-0" style="fill:#ff0000" d="m826.99,2518.3,9.615,5.5512,0,3.9598-9.615-5.5512z"></path>
                                <path id="path4175-50-4-2-2-9-37-7-6" style="fill:#ff0000" d="m818.19,2523.3,0,3.9599,8.8053-5.0838,0-3.9598z"></path>
                                <path id="path4183-92-0-3-3-1-81-5-9" style="fill:#ff0000" d="m818.19,2527.3,9.615,5.5512,8.8053-5.0838-9.615-5.5512z"></path>
                                <path id="path4177-30-8-7-0-8-8-3-6" style="fill:#ff0000" d="m818.19,2523.3,9.615,5.5512,8.8053-5.0837-9.615-5.5512z"></path>
                                <path id="path4181-48-01-0-1-8-0-3-9" style="fill:#ff0000" d="m827.8,2528.9,0,3.9599,8.8053-5.0838,0-3.9598z"></path>
                                <path id="path4179-8-8-4-6-1-19-1-8" style="fill:#ff0000" d="m818.19,2523.3,9.615,5.5512,0,3.9599-9.615-5.5512z"></path>
                            </g>
                            <g id="g4173-3-04-9-9-5-9-23-4-9" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;">
                                <path id="path4185-24-40-8-4-5-0-4-9-7" style="fill:#ff0000" d="m827.07,2518.1,6.3004,3.6376,0,1.7699-6.3004-3.6375z"></path>
                                <path id="path4175-50-4-2-2-9-9-503-1-1" style="fill:#ff0000" d="m821.36,2521.4,0,1.77,5.7032-3.2928,0-1.77z"></path>
                                <path id="path4183-92-0-3-3-1-2-6-7-7" style="fill:#ff0000" d="m821.36,2523.2,6.3004,3.6375,5.7032-3.2928-6.3004-3.6375z"></path>
                                <path id="path4177-30-8-7-0-8-6-58-7-5" style="fill:#ff0000" d="m821.36,2521.4,6.3004,3.6375,5.7032-3.2927-6.3004-3.6376z"></path>
                                <path id="path4181-48-01-0-1-8-9-84-8-6" style="fill:#ff0000" d="m827.66,2525,0,1.77,5.7032-3.2928,0-1.7699z"></path>
                                <path id="path4179-8-8-4-6-1-7-01-8-2" style="fill:#ff0000" d="m821.36,2521.4,6.3004,3.6375,0,1.77-6.3004-3.6375z"></path>
                            </g>
                        </g>
                        <g id="drrm" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="matrix(1.5960011,0,0,1.5960011,-532.93012,-3778.4812)">
                            <g id="g4173-3-04-9-9-5-7-4-9" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;">
                                <path id="path4185-24-40-8-4-5-5-4-9" style="fill:#ff0000" d="m826.99,2518.3,9.615,5.5512,0,3.9598-9.615-5.5512z"></path>
                                <path id="path4175-50-4-2-2-9-37-7-2" style="fill:#ff0000" d="m818.19,2523.3,0,3.9599,8.8053-5.0838,0-3.9598z"></path>
                                <path id="path4183-92-0-3-3-1-81-5-1" style="fill:#ff0000" d="m818.19,2527.3,9.615,5.5512,8.8053-5.0838-9.615-5.5512z"></path>
                                <path id="path4177-30-8-7-0-8-8-3-2" style="fill:#ff0000" d="m818.19,2523.3,9.615,5.5512,8.8053-5.0837-9.615-5.5512z"></path>
                                <path id="path4181-48-01-0-1-8-0-3-7" style="fill:#ff0000" d="m827.8,2528.9,0,3.9599,8.8053-5.0838,0-3.9598z"></path>
                                <path id="path4179-8-8-4-6-1-19-1-7" style="fill:#ff0000" d="m818.19,2523.3,9.615,5.5512,0,3.9599-9.615-5.5512z"></path>
                            </g>
                            <g id="g4173-3-04-9-9-5-9-23-4-2" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;">
                                <path id="path4185-24-40-8-4-5-0-4-9-4" style="fill:#ff0000" d="m827.07,2518.1,6.3004,3.6376,0,1.7699-6.3004-3.6375z"></path>
                                <path id="path4175-50-4-2-2-9-9-503-1-2" style="fill:#ff0000" d="m821.36,2521.4,0,1.77,5.7032-3.2928,0-1.77z"></path>
                                <path id="path4183-92-0-3-3-1-2-6-7-4" style="fill:#ff0000" d="m821.36,2523.2,6.3004,3.6375,5.7032-3.2928-6.3004-3.6375z"></path>
                                <path id="path4177-30-8-7-0-8-6-58-7-8" style="fill:#ff0000" d="m821.36,2521.4,6.3004,3.6375,5.7032-3.2927-6.3004-3.6376z"></path>
                                <path id="path4181-48-01-0-1-8-9-84-8-62" style="fill:#ff0000" d="m827.66,2525,0,1.77,5.7032-3.2928,0-1.7699z"></path>
                                <path id="path4179-8-8-4-6-1-7-01-8-0" style="fill:#ff0000" d="m821.36,2521.4,6.3004,3.6375,0,1.77-6.3004-3.6375z"></path>
                            </g>
                        </g>
                        <g id="drmt" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="matrix(1.5960011,0,0,1.5960011,-556.75825,-3861.2936)">
                            <g id="g4173-3-04-9-9-5-7-4-3" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;">
                                <path id="path4185-24-40-8-4-5-5-4-3" style="fill:#ff0000" d="m826.99,2518.3,9.615,5.5512,0,3.9599-9.615-5.5512z"></path>
                                <path id="path4175-50-4-2-2-9-37-7-0" style="fill:#ff0000" d="m818.19,2523.3,0,3.9598,8.8053-5.0837,0-3.9599z"></path>
                                <path id="path4183-92-0-3-3-1-81-5-4" style="fill:#ff0000" d="m818.19,2527.3,9.6149,5.5512,8.8053-5.0837-9.615-5.5512z"></path>
                                <path id="path4177-30-8-7-0-8-8-3-0" style="fill:#ff0000" d="m818.19,2523.3,9.6149,5.5512,8.8053-5.0838-9.615-5.5512z"></path>
                                <path id="path4181-48-01-0-1-8-0-3-0" style="fill:#ff0000" d="m827.8,2528.9,0,3.9598,8.8053-5.0837,0-3.9599z"></path>
                                <path id="path4179-8-8-4-6-1-19-1-9" style="fill:#ff0000" d="m818.19,2523.3,9.6149,5.5512,0,3.9598-9.6149-5.5512z"></path>
                            </g>
                            <g id="g4173-3-04-9-9-5-9-23-4-3" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;">
                                <path id="path4185-24-40-8-4-5-0-4-9-3" style="fill:#ff0000" d="m827.07,2518.1,6.3004,3.6375,0,1.77-6.3004-3.6375z"></path>
                                <path id="path4175-50-4-2-2-9-9-503-1-0" style="fill:#ff0000" d="m821.36,2521.4,0,1.77,5.7032-3.2927,0-1.77z"></path>
                                <path id="path4183-92-0-3-3-1-2-6-7-2" style="fill:#ff0000" d="m821.36,2523.2,6.3004,3.6375,5.7032-3.2927-6.3004-3.6375z"></path>
                                <path id="path4177-30-8-7-0-8-6-58-7-2" style="fill:#ff0000" d="m821.36,2521.4,6.3004,3.6375,5.7032-3.2927-6.3004-3.6375z"></path>
                                <path id="path4181-48-01-0-1-8-9-84-8-4" style="fill:#ff0000" d="m827.66,2525,0,1.77,5.7032-3.2927,0-1.77z"></path>
                                <path id="path4179-8-8-4-6-1-7-01-8-4" style="fill:#ff0000" d="m821.36,2521.4,6.3004,3.6375,0,1.77-6.3004-3.6375z"></path>
                            </g>
                        </g>
                        <g id="drrt" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;" transform="matrix(1.5960011,0,0,1.5960011,-1217.8232,-4352.6441)">
                            <g id="g4173-3-04-9-9-5-7-4-3-7" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;">
                                <path id="path4185-24-40-8-4-5-5-4-3-3" style="fill:#ff0000" d="m1240.5,2809,9.6149,5.5512,0,3.9599-9.6149-5.5512z"></path>
                                <path id="path4175-50-4-2-2-9-37-7-0-0" style="fill:#ff0000" d="m1231.7,2814.1,0,3.9598,8.8053-5.0837,0-3.9599z"></path>
                                <path id="path4183-92-0-3-3-1-81-5-4-5" style="fill:#ff0000" d="m1231.7,2818,9.6149,5.5512,8.8053-5.0837-9.6149-5.5512z"></path>
                                <path id="path4177-30-8-7-0-8-8-3-0-5" style="fill:#ff0000" d="m1231.7,2814.1,9.6149,5.5512,8.8053-5.0838-9.6149-5.5512z"></path>
                                <path id="path4181-48-01-0-1-8-0-3-0-6" style="fill:#ff0000" d="m1241.3,2819.6,0,3.9598,8.8053-5.0837,0-3.9599z"></path>
                                <path id="path4179-8-8-4-6-1-19-1-9-1" style="fill:#ff0000" d="m1231.7,2814.1,9.6149,5.5512,0,3.9598-9.6149-5.5512z"></path>
                            </g>
                            <g id="g4173-3-04-9-9-5-9-23-4-3-0" style="stroke-linejoin:round;stroke:#800000;stroke-linecap:round;fill:#ff0000;">
                                <path id="path4185-24-40-8-4-5-0-4-9-3-6" style="fill:#ff0000" d="m1240.5,2808.8,6.3004,3.6376,0,1.77-6.3004-3.6376z"></path>
                                <path id="path4175-50-4-2-2-9-9-503-1-0-0" style="fill:#ff0000" d="m1234.8,2812.1,0,1.77,5.7032-3.2928,0-1.77z"></path>
                                <path id="path4183-92-0-3-3-1-2-6-7-2-0" style="fill:#ff0000" d="m1234.8,2813.9,6.3004,3.6375,5.7032-3.2927-6.3004-3.6376z"></path>
                                <path id="path4177-30-8-7-0-8-6-58-7-2-3" style="fill:#ff0000" d="m1234.8,2812.1,6.3004,3.6375,5.7032-3.2927-6.3004-3.6376z"></path>
                                <path id="path4181-48-01-0-1-8-9-84-8-4-5" style="fill:#ff0000" d="m1241.1,2815.8,0,1.77,5.7032-3.2927,0-1.77z"></path>
                                <path id="path4179-8-8-4-6-1-7-01-8-4-5" style="fill:#ff0000" d="m1234.8,2812.1,6.3004,3.6375,0,1.77-6.3004-3.6375z"></path>
                            </g>
                        </g>
                    </g>
                </g>
                <g v-for="item in dire" transform="translate(0,0)">
                    <image
                        onerror="ifImgNotExist(this, '30x30')"
                        :href="getImgUrl('hero_minimap', item.name)"
                        :x="item.imgx" :y="item.imgy" 
                        :width="item.imgw" :height="item.imgw"
                    />
                    <circle
                        :cx="item.cx" :cy="item.cy" :r="item.r"
                        style="stroke-width:2;stroke:#CC0000;fill:none;"
                    />
                </g>
                <g v-for="item in radiant" transform="translate(0,0)">
                    <image
                        onerror="ifImgNotExist(this, '30x30')"
                        :href="getImgUrl('hero_minimap', item.name)"
                        :x="item.imgx" :y="item.imgy" 
                        :width="item.imgw" :height="item.imgw"
                    />
                    <circle
                        :cx="item.cx" :cy="item.cy" :r="item.r"
                        style="stroke-width:2;stroke:#006600;fill:none;"
                    />
                </g>
            </svg>
        </div>
    `.replace(/\s+/g, ' '),
    methods: {
        getImgUrl: base.getImgUrl
    }
};

export {
    mapTpl
}