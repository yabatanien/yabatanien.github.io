function getUrlQueries() {
    var queryStr = window.location.search.slice(1);  // 文頭?を除外
        queries = {};
  
    // クエリがない場合は空のオブジェクトを返す
    if (!queryStr) {
      return queries;
    }
  
    // クエリ文字列を & で分割して処理
    queryStr.split('&').forEach(function(queryStr) {
      // = で分割してkey,valueをオブジェクトに格納
      var queryArr = queryStr.split('=');
      queries[queryArr[0]] = queryArr[1];
    });
  
    return queries;
  }

  const onLoad = async () => {
      const queries = getUrlQueries();
      console.log(queries);
      const debug_ws_host = queries[debug_ws_host];
      const debug_ws_port = queries[debug_ws_port];
      const debug_asap_start_airplay = queries[debug_asap_start_airplay];

      var redirectUrl = "url=jp-com-intercom-ro-console-url-1911://hostname:8080/test";
      redirectUrl += new URLSearchParams(queries);
      console.log(redirectUrl);
      window.location.href = redirectUrl;
  }

  window.onload = onLoad;