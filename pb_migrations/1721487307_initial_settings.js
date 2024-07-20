migrate((db) => {
    const dao = new Dao(db);

    const settings = dao.findSettings()
    settings.meta.appName = "Platerecognizer MMC Feedback"
    settings.logs.maxDays = 7

    dao.saveSettings(settings)
    const admin = new Admin();
    admin.email = "test@example.com"
    admin.setPassword("1234567890")
    dao.saveAdmin(admin)
}, (db) => { // optional revert
    const dao = new Dao(db);

    try {
        const admin = dao.findAdminByEmail("test@example.com")

        dao.deleteAdmin(admin)
    } catch (_) { /* most likely already deleted */ }

})