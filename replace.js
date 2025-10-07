// 置換後の動画のID
const afterVideoId = 'wBf47hGMch0';
// 置換後のタイトル
const afterTitle = '【勉強】勉強してください【勉強】';

const replaceRecommendations = () => {

    // 置き換える動画をすべて取得
    const targetVideos = document.querySelectorAll('ytd-rich-item-renderer,ytd-rich-grid-renderer');

    targetVideos.forEach(video => {
        const thumbnail = video.querySelector('a#thumbnail');
        if (thumbnail)
            thumbnail.querySelector('img').src = 'https://img.youtube.com/vi/' + afterVideoId + '/hqdefault.jpg'; // サムネイル画像を変更

        const title = video.querySelector('yt-formatted-string#video-title');
        if (title)
            title.innerText = afterTitle; // タイトル変更

    });
};

setInterval(replaceRecommendations, 1000); // 1s ごとに実行
