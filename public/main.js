//加载分页
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `./page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            })
            n += 1
        }
    }
    request.send()
}

//Ajax加载json
getJson.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            //json.person:把符合json语法的字符串变成对应的对象或其它类型
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send()
}

//Ajax加载xml
getXml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            alert(text.trim())
        }
    }
    request.send()
}

//Ajax加载html
getHtml.onclick = () => {

    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        //创建 aiv 标签
        const div = document.createElement('div')
        //填写 div 内容
        div.innerHTML = request.response
        //将 div 插入body
        document.body.appendChild(div)
    }

    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}

//Ajax加载js
getJs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {

        //创建 script 标签
        const script = document.createElement('script')
        //填写 script 内容
        script.innerHTML = request.response
        //插到 html 身体
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}

//Ajax加载css
getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建 style 标签
                const style = document.createElement('style')
                //填写 style 内容
                style.innerHTML = request.response
                //插到html头部
                document.head.appendChild(style)
            } else {
                alert('加载CSS失败')
            }
        }

    }
    request.send()
}