import React from 'react'

const ButtonBank = ( { step, setStep }) => {
  return (
    <div className="button-bank">
    <ul>
      <li
        onClick={() => setStep('step1')}
        style={step === 'step1' ? { backgroundColor: 'magenta' } : null}
      >1</li>
      <li
        onClick={() => setStep('step2')}
        style={step === 'step2' ? { backgroundColor: 'magenta' } : null}
      >2</li>
      <li
        onClick={() => setStep('step3')}
        style={step === 'step3' ? { backgroundColor: 'magenta' } : null}
      >3</li>
      <li
        onClick={() => setStep('step4')}
        style={step === 'step4' ? { backgroundColor: 'magenta' } : null}
      >4</li>
      <li
        onClick={() => setStep('step5')}
        style={step === 'step5' ? { backgroundColor: 'magenta' } : null}
      >5</li>
      <li
        onClick={() => setStep('step6')}
        style={step === 'step6' ? { backgroundColor: 'magenta' } : null}
      >6</li>
      <li
        onClick={() => setStep('step7')}
        style={step === 'step7' ? { backgroundColor: 'magenta' } : null}
      >7</li>
      <li
        onClick={() => setStep('step8')}
        style={step === 'step8' ? { backgroundColor: 'magenta' } : null}
      >8</li>
      <li
        onClick={() => setStep('step9')}
        style={step === 'step9' ? { backgroundColor: 'magenta' } : null}
      >9</li>
    </ul>
  </div>
  )
}

export default ButtonBank