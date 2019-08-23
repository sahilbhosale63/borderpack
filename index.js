function borderpack(options) {
    let images = document.querySelectorAll('.borderpack');

    if (options.border_type === 'dashed'){
        options.border_type = 'dashed';
    }
    else if(options.border_type === 'dotted'){
        options.border_type = 'dotted';
    }
    else{
        options.border_type = 'none';
    }

    images.forEach(image =>{
        image.style.borderStyle = `${options.border_type}`;
    })
}

module.exports.borderpack = borderpack;