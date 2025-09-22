// 페이지가 로드되면 API를 통해 뉴스를 가져와서 화면에 표시
document.addEventListener('DOMContentLoaded', () => {
    // 1. 우리 백엔드 서버에 F1 뉴스 데이터를 요청한다.
    fetch('http://localhost:8080/api/news') // 백엔드 API 주소
        .then(response => response.json()) // 2. 받아온 응답을 JSON 형태로 변환한다.
        .then(data => {
            // 3. 성공적으로 데이터를 받아오면, displayNews 함수를 호출한다.
            displayNews(data); 
        })
        .catch(error => {
            // 4. 만약 오류가 발생하면 콘솔에 에러를 출력한다.
            console.error('뉴스 데이터를 가져오는 데 실패했습니다:', error);
        });
});

// 뉴스 데이터를 HTML로 변환하여 페이지에 삽입하는 함수
function displayNews(newsData) {
    const container = document.getElementById('news-container');
    
    // 이제 newsData는 API로부터 받아온 진짜 데이터!
    const newsHTML = newsData.map(news => `
        <article class="news-card">
            <a href="${news.originalLink}" target="_blank" class="card-link">
                <img src="${news.imageUrl}" alt="${news.translatedTitle}" class="card-image">
                <div class="card-content">
                    <h2>${news.translatedTitle}</h2>
                    <%-- <p>${news.summary}</p> --%>  <%-- 현재 API에 요약 정보가 없으므로 주석 처리 --%>
                    <div class="card-footer">
                        <span>${news.createdAt.substring(0, 10)}</span> <%-- 날짜만 표시 --%>
                    </div>
                </div>
            </a>
        </article>
    `).join('');

    container.innerHTML = newsHTML;
}