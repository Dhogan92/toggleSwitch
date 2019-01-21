$('#toggleSwitchBtn').click(function(e) {
    $('button').toggleClass('toggleSwitchBtnOff toggleSwitchBtnOn')
 
    $('#toggleSwitch').toggleClass('toggleSwitch toggleSwitchActive')

    $('body').toggleClass('appBody appBodyActive' )
  
    e.preventDefault()
})

