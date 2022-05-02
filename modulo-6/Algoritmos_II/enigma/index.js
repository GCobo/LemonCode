// b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)

getInitialTextArea = document.querySelector('#initial')
getResultTextArea = document.querySelector('#result')
getEncryptButton = document.querySelector('#encrypt')
getDecryptButton = document.querySelector('#decrypt')

const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,' "
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm "

const encript = () => {
  const value = getInitialTextArea.value
  const getIndex = [...value].map((item) => [...plainAlphabet].indexOf(item))
  const getEncryptChart = getIndex.map((item) => encryptedAlphabet[item])
  return (getResultTextArea.value = getEncryptChart.join(''))
}

const desencript = () => {
  const value = getResultTextArea.value
  const getIndex = [...value].map((item) =>
    [...encryptedAlphabet].indexOf(item),
  )
  const getDesencryptChart = getIndex.map((item) => plainAlphabet[item])

  return (getInitialTextArea.value = getDesencryptChart.join(''))
}

getEncryptButton.addEventListener('click', encript)
getDecryptButton.addEventListener('click', desencript)
