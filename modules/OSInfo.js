var os = require('os');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                getOSinfo();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
        function getOSinfo() {
            var type = os.type();
            if(type === 'Darwin') {
            type = 'OSX';
            } else if(type === 'Windows_NT') {
            type = 'Windows';
            }
            
            var uptime = os.uptime();
            
            console.log('Uptime: ~', (uptime / 60).toFixed(2), 'min');
            console.log('Uptime: ~', (uptime / 3600).toFixed(3), 'h');
            
        }
        exports.print = getOSinfo;
    }

});