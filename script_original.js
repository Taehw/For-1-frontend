// 뉴스 데이터 (실제로는 API를 통해 받아오는 경우가 많습니다)
const newsData = [
    {
        title: "베르스타펜, 아제르바이잔 GP 우승… 맥라렌은 악몽의 하루",
        summary: "막스 베르스타펜(레드불)이 아제르바이잔 그랑프리에서 우승을 차지하며 타이틀 경쟁에 다시 불을 지폈습니다. 반면, 맥라렌은 힘든 하루를 보냈습니다.",
        source: "AP News, The Times of India"
    },
    {
        title: "해밀턴, '르클레르에게 사과할 것'… 페라리 팀 오더 논란",
        summary: "루이스 해밀턴(페라리)이 아제르바이잔 GP 막판 팀의 지시를 제대로 이행하지 못한 것에 대해 사과하겠다고 밝혔습니다.",
        source: "Sky Sports"
    },
    {
        title: "영화 'F1', 소니 맞춤형 초소형 카메라로 박진감 넘치는 장면 구현",
        summary: "제작 중인 F1 영화가 소니가 특별 제작한 초소형 카메라 덕분에 초현실적인 레이싱 장면을 담아낼 수 있었다는 비하인드 스토리가 공개되었습니다.",
        source: "디지털투데이"
    },
    {
        title: "쿠팡플레이, 2026 시즌부터 F1 중계 4K로 선보인다",
        summary: "쿠팡플레이가 F1과의 장기 파트너십 연장 계약을 체결하고, 2026 시즌부터 국내 최초로 F1의 모든 세션을 4K 초고화질로 중계한다고 발표했습니다.",
        source: "쿠팡 뉴스룸"
    },
    {
        title: "잭 다니엘스, 맥라렌 F1 팀과 협업한 '맥라렌 에디션 2025' 출시 예정",
        summary: "세계적인 위스키 브랜드 잭 다니엘스가 맥라렌 F1 팀과의 파트너십을 기념하는 한정판 '맥라렌 에디션 2025' 출시를 앞두고 있습니다.",
        source: "뉴스1"
    }
];

// 뉴스 데이터를 HTML로 변환하여 페이지에 삽입하는 함수
function displayNews() {
    const container = document.getElementById('news-container');
    
    // newsData 배열의 각 아이템에 대해 HTML 카드를 생성
    const newsHTML = newsData.map(news => `
        <article class="news-card">
            <div class="card-content">
                <h2>${news.title}</h2>
                <p>${news.summary}</p>
                <div class="card-footer">
                    <span>출처: ${news.source}</span>
                </div>
            </div>
        </article>
    `).join(''); // 배열을 하나의 문자열로 합침

    container.innerHTML = newsHTML;
}

// 페이지가 로드되면 뉴스 표시 함수를 실행
document.addEventListener('DOMContentLoaded', displayNews);