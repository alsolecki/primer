import React from 'react'

const ButtonBank = ( { step, setStep }) => {
  return (
    <div className="button-bank">
    <ul>
      <li
        onClick={() => setStep('step1')}
        style={step === 'step1' ? { backgroundColor: "hsl(240, 70%, 50%)" } : null}
      >1</li>
      <li
        onClick={() => setStep('step2')}
        style={step === 'step2' ? { backgroundColor: "hsl(225, 70%, 50%)" } : null}
      >2</li>
      <li
        onClick={() => setStep('step3')}
        style={step === 'step3' ? { backgroundColor: "hsl(210, 70%, 50%)" } : null}
      >3</li>
      <li
        onClick={() => setStep('step4')}
        style={step === 'step4' ? { backgroundColor: "hsl(195, 70%, 50%)" } : null}
      >4</li>
      <li
        onClick={() => setStep('step5')}
        style={step === 'step5' ? { backgroundColor: "hsl(180, 70%, 50%)" } : null}
      >5</li>
      <li
        onClick={() => setStep('step6')}
        style={step === 'step6' ? { backgroundColor: "hsl(165, 70%, 50%)" } : null}
      >6</li>
      <li
        onClick={() => setStep('step7')}
        style={step === 'step7' ? { backgroundColor: "hsl(150, 70%, 50%)" } : null}
      >7</li>
      <li
        onClick={() => setStep('step8')}
        style={step === 'step8' ? { backgroundColor: "hsl(135, 70%, 50%)" } : null}
      >8</li>
      <li
        onClick={() => setStep('step9')}
        style={step === 'step9' ? { backgroundColor: "hsl(120, 70%, 50%)" } : null}
      >9</li>
    </ul>
  </div>
  )
}

export default ButtonBank