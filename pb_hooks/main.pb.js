
routerUse($apis.bodyLimit(10485760)) // 10MB


// Set auth user as user on create
onRecordBeforeCreateRequest((e) => {
    const authRecord = e.httpContext.get("authRecord")
    // console.log(authRecord.id)
    e.record.set('user', authRecord.id)
}, "feedbacks")


// Set auth user as user on update
onRecordBeforeUpdateRequest((e) => {
    const authRecord = e.httpContext.get("authRecord")
    // console.log(authRecord.id)
    e.record.set('user', authRecord.id)
}, "feedbacks")


