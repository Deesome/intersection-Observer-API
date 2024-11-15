const video = document.getElementById("scrollVideo")

const observer = new IntersectionObserver((entries)=>{
    console.log(entries)
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            video.play()
        }else{
            video.pause()
        }
    })

},{
    root: null, 
    threshold: 0.5
})

observer.observe(video)





