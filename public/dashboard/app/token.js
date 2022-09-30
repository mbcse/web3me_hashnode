// eslint-disable-next-line quotes

/* eslint-disable no-undef */
const getTokens = async () => {
  axios({
    url: `/me/transfers/token/${chain}/${address}`,
    method: 'GET',
    onDownloadProgress: progressEvent => {
      const dataChunk = progressEvent.currentTarget.response
      // console.log(dataChunk)
      const data = dataChunk.split('\r\n')
      console.log(data)
      const token = JSON.parse(data[data.length - 2])
      $('#token-transfers').append(`
        <tr>
          <td class="align-middle text-center text-sm">
            <p class="badge badge-sm bg-gradient-${token.type === 'Sent' ? 'danger' : 'success'}">${token.type}</p>
          </td>
          <td>
            <p class="text-center text-xs font-weight-bold mb-0">${token.name}</p>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">${token.symbol}</span>
          </td>
          <td>
            <span class="text-center text-xs font-weight-bold mb-0 text-warning">${token.decimal}</span>
          </td>
          <td class="align-middle text-center">
            <a href="${explorerLink}/address/${token.tokenAddress}" class="text-primary text-xs font-weight-bold">${token.tokenAddress}</a>
          </td>
          <td class="align-middle text-center">
            <a href="${explorerLink}/address/${token.fromAddress}" class="text-primary text-xs font-weight-bold">${token.fromAddress}</a>
          </td>
          <td class="align-middle text-center">
            <a href="${explorerLink}/address/${token.toAddress}" class="text-primary text-xs font-weight-bold">${token.toAddress}</a>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">${token.amount / (10 ** token.decimal)}</span>
          </td>
          <td class="align-middle text-center">
            <a href="${explorerLink}/tx/${token.transactionHash}" class="text-primary text-xs font-weight-bold">${token.transactionHash}</a>
          </td>
        </tr>
    
      `)
    }

  }).then(({ data }) => {
    console.log(data)
  })

  // const xhr = new XMLHttpRequest()
  // xhr.open('GET', `/me/transfers/token/${chain}/${address}`)
  // xhr.send()
  // xhr.onprogress = function (event) { // triggers periodically
  //   // event.loaded - how many bytes downloaded
  //   // event.lengthComputable = true if the server sent Content-Length header
  //   // event.total - total number of bytes (if lengthComputable)
  //   console.log(event.currentTarget.response)
  // }
}

getTokens()
