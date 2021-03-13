function checktoke() {
  return async function(ctx, next) {
    try {
      let token = ctx.request.header.token;
      //valiate token
      let decode = ctx.app.jwt.verify(toke, ctx.app.config.jwt.secret);

      // decode :{username : 'xx'}
      if (decode && decode.username) {
        await next();
      } else {
        ctx.body = {
          code: 40000,
          msg: "username 校验失败"
        };
      }
    } catch (e) {
      ctx.body = {
        code: 40000,
        msg: "token没有校验通过"
      };
    }
  };
}
