import 'package:flutter/material.dart';
import 'package:productos_app/widgets/widgets.dart';

class loginScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: AuthBackground(
      child: Container(
        child: SingleChildScrollView(
            child: Column(
          children: [
            SizedBox(
              width: 100,
            )
          ],
        )),
      ),
    ));
  }
}
