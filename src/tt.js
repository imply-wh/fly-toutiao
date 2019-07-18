//头条小程序入口
const _Fly = require("./fly")
const EngineWrapper = require("./engine-wrapper")
const adapter = require("./adapter/tt")
const ttEngine = EngineWrapper(adapter)
module.exports=function (engine) {
    return new _Fly(engine || ttEngine);
}
